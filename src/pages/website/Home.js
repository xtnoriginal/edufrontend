import React  from "react";
import {Button, Card, Container, Grid, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {BlogPostCard, BlogPostsSearch, BlogPostsSort} from "../../sections/@dashboard/blog";
import Page from "../../components/Page";
import Iconify from "../../components/Iconify";
import {styled} from "@mui/material/styles";
import {ProductCartWidget, ProductFilterSidebar, ProductList, ProductSort} from "../../sections/@dashboard/products";
import PRODUCTS from "../../_mocks_/products";
import Footer from "../../components/footer/Footer";

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));



class Home extends React.Component{


    render() {
        return(
            <Page title="Home | Eduproject">
                <Container maxWidth="xl">

                    <Grid
                        sx={{
                            display: 'grid',
                            gap: 10,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            marginTop: 20
                        }}
                    >
                        <div>
                            <Typography variant="h2">
                                Helping Students <br/> Pass their <br/> final exams
                            </Typography>
                            <Button  to="/register" variant="outlined" sx={{marginTop:3}} component={RouterLink}> Register</Button>
                        </div>

                        <img alt="register" src="/static/illustrations/illustration_avatar.png" />


                    </Grid>
                </Container>


                <Container maxWidth="xl">

                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Available
                    </Typography>


                    <Stack
                        direction="row"
                        flexWrap="wrap-reverse"
                        alignItems="center"
                        sx={{ mb: 5 }}
                    >

                        <h4>IGSCE, ALevels, Matric, Grade 7</h4>

                    </Stack>

                </Container>

            </Page>
        );
    }

}



export default Home;