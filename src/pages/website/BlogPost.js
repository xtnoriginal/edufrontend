import {Component} from "react";
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import {BlogPostCard, BlogPostsSearch, BlogPostsSort} from "../../sections/@dashboard/blog";
import POSTS from '../../_mocks_/blog';
import Page from "../../components/Page";
import axios from "axios";
import Comments from "../../sections/@dashboard/blog/Comments";


// components

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default class BlogPost extends Component{
    state = {
        blogpost:{}
    }

    componentDidMount() {
        axios.get("http://localhost:8080/blog/article/National%20Basketball")
            .then(res => {
                const blogpost = res.data;

                this.setState({blogpost });
            })
    }

    render() {

        return (
            <Page title="Blog | Eduproject">
                <Container>
                    <Typography variant="h3" sx={{textAlign: "center"}}>{this.state.blogpost.title}</Typography>
                    <p>
                        {this.state.blogpost.article}
                    </p>

                    <Comments/>
                </Container>
            </Page>
        );

    }


}
