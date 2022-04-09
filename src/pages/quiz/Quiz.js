import React from "react";
// material
import {
    Button,
    Card, CardContent,
    Container,
    FormControlLabel,
    FormLabel,
    MobileStepper, Radio,
    RadioGroup,
    Snackbar,
    Stack,
    Typography
} from '@mui/material';
// components
import Page from '../../components/Page';
import DotsMobileStepper from "../../components/DotsMobileStepper";
import FormControl from "@mui/material/FormControl";
import Replay from '@material-ui/icons/Replay';
import MuiAlert from "@material-ui/lab/Alert"


//

// ----------------------------------------------------------------------


const Quiz_Set = [
    {
        queno:"que_1",
        que : "1) How many sides are equal in a scalene triangle?",
        options : [{que_options: "3" , selected: false},{que_options:"2", selected: false},{que_options:"0", selected: false}],
        ans : "0"
    },
    {
        queno:"que_2",
        que : "2) The angles of a triangle are 90°,35° and 55°.What type of triangle is this?",
        options : [{que_options: "Right Angled" , selected: false},{que_options:"Obtuse Angled", selected: false},{que_options:"Acute Angled", selected: false}],
        ans : "Right Angled"
    },
    {
        queno:"que_3",
        que : "3) The perimeter of an equilateral triangle is 24cm.Length of each side(in cm) is?",
        options : [{que_options: "9" , selected: false},{que_options:"6", selected: false},{que_options:"8", selected: false}],
        ans : "8"
    },
    {
        queno:"que_4",
        que : "4) The sum of angles of a triangle is?",
        options : [{que_options: "90" , selected: false},{que_options:"150", selected: false},{que_options:"180", selected: false}],
        ans : "180"
    },
    {
        queno:"que_5",
        que : "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
        options : [{que_options: "Isosceles" , selected: false},{que_options:"Equilateral", selected: false},{que_options:"Scalene", selected: false}],
        ans : "Equilateral"
    },
    {
        queno:"que_6",
        que : "6) What is a third angle for a triangle where angle1 = 57° and angle2 = 92° ?",
        options : [{que_options: "45" , selected: false},{que_options:"60", selected: false},{que_options:"31", selected: false}],
        ans : "31"
    },
    {
        queno:"que_7",
        que : "7) Pythagoras theorem is applicable to which type of triangles?",
        options : [{que_options: "Right" , selected: false},{que_options:"Acute", selected: false},{que_options:"Obtuse", selected: false}],
        ans : "Right"
    },
    {
        queno:"que_8",
        que : "8) The triangle which has 2 sides congruent?",
        options : [{que_options: "Equilateral" , selected: false},{que_options:"Isosceles", selected: false},{que_options:"Scalene", selected: false}],
        ans : "Isosceles"
    }
]


export default class Quiz extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : Quiz_Set,
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:""
        }

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

    onsubmit = () =>{
        //   console.log(this.state.Quiz_Set)
        let list = this.state.Quiz_Set ;
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
            <Page title="Dashboard: Products | Minimal-UI">
                <Container>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Quiz
                    </Typography>

                    <Card >
                        <CardContent>

                            <div className="Quiz_render_container">
                                { this.state.booleanonsubmit ?
                                    <div className="Quiz-DisplayResult">
                                        <h2> The score is {this.state.Total} Out Of 8 </h2>
                                        <Button onClick={()=>{this.setState({booleanonsubmit:false,activeStep:0,Quiz_Set : Quiz_Set,Total:0})}}> <Replay/> Try again </Button>
                                    </div>
                                    :
                                    <div className="Quiz_container_display">
                                        {this.state.Quiz_Set.map((item,index)=>{
                                            if( Math.abs(this.state.activeStep - index)<=0)
                                            {
                                                return (
                                                    <div>
                                                        <div className="Quiz_que">{item.que}</div>

                                                        <div className="Quiz_options"> Options are : </div>
                                                        {item.options.map((ans,index_ans)=>{
                                                            index_ans = index_ans + 1
                                                            return (
                                                                <div key={index_ans} className="Quiz_multiple_options">

                                                                    {index_ans}] {ans.que_options}

                                                                    <input
                                                                        key={index_ans}
                                                                        type="radio"
                                                                        name={item.queno}
                                                                        value={ans.que_options}
                                                                        checked={!!ans.selected}
                                                                        onChange={this.onInputChange}
                                                                    />
                                                                </div>
                                                            )
                                                        })}


                                                    </div>
                                                )
                                            }else{
                                                return null
                                            }

                                        })}

                                        <div className="Quiz-MobileStepper">
                                            <MobileStepper  variant="dots" steps={this.state.Quiz_Set.length} position="static" activeStep={this.state.activeStep}
                                                            nextButton={
                                                                this.state.activeStep === 7 ?
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
                                    </div>
                                }
                                {this.Snackbarrender()}
                            </div>



                        </CardContent>
                    </Card>




                </Container>
            </Page>
        );
    }
}
