// material
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from "../../components/Page";
import AppSubject from "../../sections/app/subject/AppSubject";
// components
import {Component} from "react";
import axios from "axios";
import {getToken} from "../../services/common";


// ----------------------------------------------------------------------
//id = subjectname
//board = ZIMSEC

const subjects = ['Biology','Physics', 'Mathematics', 'PE', 'Shona', 'VPA', 'Computer_Science','English']



export default class HomeApp extends Component{
    state = {
        subjects:[]
    }

    componentDidMount() {
        axios.get("http://localhost:8080/app/home/claudious", {
            headers: {
                'Authorization': `token ${getToken()}`
            }
        })
            .then(res => {
                const subjects = res.data["content"];
                console.log(subjects);

                this.setState({ subjects });
            })
    }


    render(){
        return (
            <Page title=" | Home">
                <Container maxWidth="xl">


                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4">Hi, Welcome back</Typography>
                    </Box>
                    <Grid container spacing={3}>

                        {this.state.subjects.map(subject =>(
                            <Grid item xs={12} sm={6} md={3}>
                                <AppSubject subject={subject} />
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </Page>
        );
    }
}
