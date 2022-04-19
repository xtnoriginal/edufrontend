import { Link as RouterLink } from 'react-router-dom';
// material
import {Grid, Button, Container, Stack, Typography, CardContent, Card} from '@mui/material';
import Iconify from "../../components/Iconify";
import Page from "../../components/Page";
// components




// ----------------------------------------------------------------------


const instructions = ["The examination will consist of 2 questions."
    ,"Total time to complete the coding challenge (both questions) is 30 mins. Please allocate your time accordingly."
    ,"Please make sure you have a good and stable internet connection and power source. The coding challenge cannot be paused once it begins."
]


export default function StartQuiz() {
    return (
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>


                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        startIcon={<Iconify icon="eva:plus-fill" />}
                    >
                        New Post
                    </Button>
                </Stack>


                <Card>
                    <CardContent>

                        <Typography variant="h3">Instructions</Typography>

                        <Typography>
                        {instructions.map(instruction=>(
                            <Typography >{instruction}</Typography>
                        ))}
                        </Typography>

                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="#"
                                startIcon={<Iconify icon="eva:plus-fill" />}
                            >
                                New Post
                            </Button>
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="/app/quiz"
                                startIcon={<Iconify icon="eva:plus-fill" />}
                            >
                                Start
                            </Button>
                        </Stack>
                    </CardContent>



                </Card>



            </Container>
        </Page>
    );
}
