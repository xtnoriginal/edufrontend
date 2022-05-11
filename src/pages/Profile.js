import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {AccountProfile} from "../sections/app/account/account-profile";
import {AccountProfileDetails} from "../sections/app/account/account-profile-details";
import {Box} from "@mui/system";
import Page from "../components/Page";
import axios from "axios";
import {useState, Component} from "react";


const user = {
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
};

export default class Profile extends Component{

    state = {
        persons:{}
    }

    componentDidMount() {
        axios.get("http://localhost:8080/app/profile/claudious")
            .then(res => {
                const persons = res.data;
                console.log(persons);

                this.setState({ persons });
            })
    }



    render() {
        return (
            <Page title="App: Profile | Eduproject">
                <Container>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Profile
                    </Typography>

                    <Card>
                        <CardContent>

                            <>
                                <Box
                                    component="main"
                                    sx={{
                                        flexGrow: 1,
                                        py: 8
                                    }}
                                >
                                    <Container maxWidth="lg">
                                        <Typography
                                            sx={{ mb: 3 }}
                                            variant="h4"
                                        >
                                            Account
                                        </Typography>
                                        <Grid
                                            container
                                            spacing={3}
                                        >
                                            <Grid
                                                item
                                                lg={4}
                                                md={6}
                                                xs={12}
                                            >
                                                <AccountProfile name ={this.state.persons.firstName} city="Harare" country="Zimbabwe"/>
                                            </Grid>
                                            <Grid
                                                item
                                                lg={8}
                                                md={6}
                                                xs={12}
                                            >
                                                <AccountProfileDetails   user = {this.state.persons}/>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </Box>
                            </>

                        </CardContent>
                    </Card>

                </Container>
            </Page>
        );
   }
}
