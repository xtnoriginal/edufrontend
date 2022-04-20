import React  from "react";
import {Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {BlogPostCard, BlogPostsSearch, BlogPostsSort} from "../../sections/@dashboard/blog";
import Page from "../../components/Page";
import Iconify from "../../components/Iconify";



class Home extends React.Component{


    render() {
        return(
            <Page title="Dashboard: Blog | Minimal-UI">
                <Container>

                    <Stack>
                        <Typography> Improving Education</Typography>

                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="#"
                            startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                           Register
                        </Button>
                    </Stack>
                </Container>
            </Page>
        );
    }

}



export default Home;