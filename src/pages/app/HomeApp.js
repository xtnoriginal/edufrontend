// material
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from "../../components/Page";
import AppSubject from "../../sections/app/subject/AppSubject";
// components
import {Link as RouterLink, useNavigate} from 'react-router-dom';


// ----------------------------------------------------------------------

export default function HomeApp() {

    const navigate = useNavigate();

    const handleClick= (event) => {
        console.log('yes');
        navigate('/app/quiz', { replace: true });
    };


    return (
        <Page title="Dashboard | Minimal-UI">
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Hi, Welcome back</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject subject='' onClick={handleClick()}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppSubject onClick={handleClick()} />
                    </Grid>


                </Grid>
            </Container>
        </Page>
    );
}
