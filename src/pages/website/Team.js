import React  from "react";
import {Box, Container, Grid,  Stack, Typography} from "@mui/material";
import Page from "../../components/Page";

import Qoute from "../../components/Qoute";





class Team extends React.Component{


    render() {
        return(

            <Page title="About | Eduproject">

                <Container maxWidth="xl">
                    <Stack >
                        <Typography variant="body2"  align='center'>Eduproject</Typography>
                        <Typography variant='h3' align='center'>Our Team</Typography>
                    </Stack>

                    <Grid
                        sx={{
                            display: 'grid',
                            gap: 10,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            margin:5
                        }}
                    >
                        <Box>
                            <Typography variant='p'>
                              Claudious Nhemwa is a Software Engineer by profession. He hold a  Bachelors  degree in Computer Engineering and  Computer Science
                                Honours at the University Of Cape Town. His interest are in the sub field of machine learning  called Computer Vision. Computer Vision aims to
                                derive information from images  and videos.
                            </Typography>
                        </Box>
                        <img  alt="Claudious Nhemwa image" src="/static/team/claudiousnhemwa.jpeg" />


                        <img alt="register" src="/static/illustrations/illustration_register.png" />
                        <Box>
                            <Typography variant='p'>
                                Eduproject is  group that aims to lead a revolution in the education sector using technology.
                                Education originated as transmission of cultural heritage from one generation to the next.
                                Today, educational goals increasingly encompass new ideas such as liberation of learners,
                                critical thinking about presented information, skills needed for the modern society, empathy and complex vocational skills.
                                The Eduproject aims to help in the fulfillment of these ambitious goals using technology.
                                Education reforms, such as for improving quality and efficiency of education towards relevance in students' lives and efficient problem solving in modern or future society at large, or for evidence-based education methodologies. A right to education has been recognized by some governments and the United Nations. Global initiatives aim at achieving the Sustainable Development Goal 4, which promotes quality education for all.

                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant='p'>
                                Eduproject is  group that aims to lead a revolution in the education sector using technology.
                                Education originated as transmission of cultural heritage from one generation to the next.
                                Today, educational goals increasingly encompass new ideas such as liberation of learners,
                                critical thinking about presented information, skills needed for the modern society, empathy and complex vocational skills.
                                The Eduproject aims to help in the fulfillment of these ambitious goals using technology.
                                Education reforms, such as for improving quality and efficiency of education towards relevance in students' lives and efficient problem solving in modern or future society at large, or for evidence-based education methodologies. A right to education has been recognized by some governments and the United Nations. Global initiatives aim at achieving the Sustainable Development Goal 4, which promotes quality education for all.

                            </Typography>
                        </Box>
                        <img alt="register" src="/static/team/claudiousnhemwa.jpeg" />
                    </Grid>

                </Container>


                <Container maxWidth="xl">
                    <Qoute/>
                </Container>

            </Page>
        );
    }

}



export default Team;
