import { Link as RouterLink } from 'react-router-dom';
// material
import {Grid, Button, Container, Stack, Typography, CardContent, Card, Checkbox} from '@mui/material';
import Iconify from "../../components/Iconify";
import Page from "../../components/Page";
// components




// ----------------------------------------------------------------------


const instructions = ["The examination will consist of 40 questions."
    ,"Total time to complete the coding challenge (both questions) is 40 mins. Please allocate your time accordingly.",
    "Unless specified you can use a calculator"
    ,"Please make sure you have a good and stable internet connection and power source. The coding challenge cannot be paused once it begins."
]


export default function StartQuiz() {
    return (
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>


                <Typography variant="h4" gutterBottom>
                    Exam
                </Typography>
                <Card>
                    <CardContent>

                        <Typography variant="h3">Instructions</Typography>

                        <Typography>
                        {instructions.map(instruction=>(
                            <Typography >{instruction}</Typography>
                        ))}
                        </Typography>

                        <Checkbox>Time Limit Per Question</Checkbox>
                        <Checkbox>Time Limit Per Question</Checkbox>

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
