import React  from "react";
import {Box, Container, Grid, ImageList, ImageListItem, Stack, TextField, Typography} from "@mui/material";
import Page from "../../components/Page";
import {textAlign} from "@mui/system";


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];

class About extends React.Component{


    render() {
        return(

            <Page title="About | Eduproject">

                <Container maxWidth="xl">
                    <Stack >
                        <Typography variant="body2"  align='center'>Eduproject</Typography>
                        <Typography variant='h3' align='center'>Who are we?</Typography>
                    </Stack>

                    <Grid
                        sx={{
                            display: 'grid',
                            gap: 3,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <Box>
                            <Typography variant='p'>
                                Eduproject is  group that aims to lead a revolution in the education sector using technology.


                            </Typography>

                        </Box>

                        <img alt="register" src="/static/illustrations/illustration_register.png" />


                    </Grid>



                </Container>
            </Page>
        );
    }

}



export default About;