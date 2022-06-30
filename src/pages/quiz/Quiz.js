import React from "react";
// material
import {
    Button,
    Card, CardContent,
    Container,
    FormControlLabel,
    FormLabel, LinearProgress,
    MobileStepper, Radio,
    RadioGroup,
    Snackbar, Stack,
    Typography
} from '@mui/material';
// components
import Page from '../../components/Page';
import FormControl from "@mui/material/FormControl";
import MuiAlert from "@material-ui/lab/Alert"
import axios from "axios";
import Countdown from "../../components/countdown/Countdown";
import DataTable from "../../sections/app/quiz/DataTable";
import {Link as RouterLink} from "react-router-dom";
import Iconify from "../../components/Iconify";
import {getAccessToken} from "../../services/common";


//

// ----------------------------------------------------------------------




export default class Quiz extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : [],
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:"",

        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/quiz/sub", {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            }}
        )
            .then(res => {
                const Quiz_Set  = res.data;
                console.log(Quiz_Set )
                this.setState({ Quiz_Set });
            })
    }

    handleNext=()=>{
        this.setState({activeStep:this.state.activeStep+1})
    }

    handleBack=()=>{
        this.setState({activeStep:this.state.activeStep-1})
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open : false})
    };
/*
    onInputChange = (e) => {

        const { Quiz_Set } = this.state;
        const nexState = Quiz_Set.map(card => {
            if (card.queno !== e.target.name) return card;
            return {
                ...card,
                options: card.options.map(opt => {
                    const checked = opt.que_options === e.target.value;
                    return {
                        ...opt,
                        selected: checked
                    }
                })
            }
        });
        this.setState({ Quiz_Set: nexState })
    }
*/
    onsubmit = () =>{
        //   console.log(this.state.Quiz_Set)
        let list = this.state.subjects ;
        let count = 0;
        let notattempcount = 0;

        list.map((item,key)=>{
            item.options.map((anslist,key)=>{
                //  console.log("anslist.selected===>",anslist.selected)
                if(anslist.selected === true){
                    if(anslist.que_options === item.ans){
                        //   console.log("===>",anslist.que_options,item.ans)
                        count = count + 1;
                    }
                }else{
                    notattempcount = notattempcount + 1
                }
            })
        })


        if(notattempcount<=24 && notattempcount>16){
            this.setState({booleanonsubmit:false,Total:count})
            this.setState({catchmsg:"Please attempt all questions",errormsg:"error",open:true})
        }else{
            this.setState({booleanonsubmit:true,Total:count})
        }
    }


    Snackbarrender =() =>{
        return(
            this.state.open? <Snackbar open={this.state.open} autoHideDuration={5000}  onClose={this.handleClose} style={{marginTop:'0px',width:'100%'}}>
                <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={this.state.errormsg} >
                    {this.state.catchmsg}
                </MuiAlert>
            </Snackbar> : null
        )
    }




    render(){
        return (
            <Page title="Quiz | Eduproject">
                <Container>

                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Quiz
                        </Typography>

                        <Countdown/>

                    </Stack>


                    <p>
                        {this.state.Quiz_Set.question}
                    </p>



                   <Card>
                        <CardContent>

                            <div>



                                {this.state.Quiz_Set.map((item,index)=>{

                                    if(Math.abs(this.state.activeStep-index)<=0) {
                                        const  picture = "http://localhost:8080/images/papers/"+item["picture"]
                                        console.log(picture);

                                        return (
                                            <div>
                                                <LinearProgress variant="determinate" value={this.state.activeStep*(1/40)*100} />


                                                {item['picture'] != null &&
                                                        <Container justify = "center" alignItems="center">
                                                            <img src={picture} alt="Question"/>
                                                        </Container>
                                                }



                                                <Typography variant="h6">{item.question}</Typography>

                                                { item.answers != null?
                                                    <FormControl sx={{amarginTop: 5, marginBottom: 5}}>
                                                        <FormLabel id="answerslabel">Answers</FormLabel>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            name="radio-buttons-group"
                                                        >
                                                            {item.answers.map((question, id) => {

                                                                const position = Object.keys(question)[0];
                                                                return (

                                                                    <FormControlLabel value={position}
                                                                                      control={<Radio/>}
                                                                                      label={position + ") " + question[position]}/>

                                                                )
                                                            })}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    :
                                                    <>
                                                        <Typography>Answers</Typography>
                                                        <DataTable/>
                                                    </>
                                                }
                                            </div>
                                        )
                                    }else {
                                        return null
                                    }
                                })}



                                <div className="Quiz-MobileStepper">
                                    <MobileStepper  variant="dots" steps={this.state.Quiz_Set.length} position="static" activeStep={this.state.activeStep}
                                                    nextButton={
                                                        this.state.activeStep === this.state.Quiz_Set.length-1 ?
                                                            <Button size="small" onClick={this.onsubmit}>
                                                                Submit
                                                            </Button>
                                                            :
                                                            <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.Quiz_Set.length}>
                                                                Next
                                                            </Button>

                                                    }
                                                    backButton={
                                                        <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                                            Back
                                                        </Button>
                                                    }
                                    />
                                </div>
                                {this.Snackbarrender()}

                            </div>

                        </CardContent>
                    </Card>






                </Container>
            </Page>
        );
    }
}
