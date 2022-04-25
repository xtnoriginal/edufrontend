// material
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from "../../components/Page";
import AppSubject from "../../sections/app/subject/AppSubject";
// components
import {Link as RouterLink, useNavigate} from 'react-router-dom';


// ----------------------------------------------------------------------
//id = subjectname
//board = ZIMSEC

const subjects = ['Biology','Physics', 'Mathematics', 'PE', 'Shona', 'VPA', 'Computer_Science','English']



export default function HomeApp() {




    return (
        <Page title=" | Home">
            <Container maxWidth="xl">


                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hi, Welcome back</Typography>
                </Box>
                <Grid container spacing={3}>

                    {subjects.map(subject =>(
                        <Grid item xs={12} sm={6} md={3}>
                            <AppSubject subject={subject} />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Page>
    );
}
