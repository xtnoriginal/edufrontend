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
                            gap: 3,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}

                    >


                        <img alt="register" src="/static/illustrations/illustration_avatar.png" />
                        <Typography>
                            Helping Students Pass their final exams
                        </Typography>

                    </Grid>
                </Container>


                <Container maxWidth="xl">

                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Products
                    </Typography>

                    <Stack
                        direction="row"
                        flexWrap="wrap-reverse"
                        alignItems="center"
                        justifyContent="flex-end"
                        sx={{ mb: 5 }}
                    >

                    </Stack>

                    <ProductList products={PRODUCTS} />
                    <ProductCartWidget />
                </Container>

                <Footer/>
            </Page>
        );
    }

}



export default Home;