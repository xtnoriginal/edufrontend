
// material
import { Grid,  Container, Stack, Typography } from '@mui/material';
import {BlogPostCard, BlogPostsSearch, BlogPostsSort} from "../../sections/@dashboard/blog";
import POSTS from '../../_mocks_/blog';
import Page from "../../components/Page";

// components

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {



    return (
        <Page title="Blog | Eduproject">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>

                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={POSTS} />
                    <BlogPostsSort options={SORT_OPTIONS} />
                </Stack>

                <Grid container spacing={3}>
                    {POSTS.map((post, index) => (
                        <BlogPostCard  key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}
