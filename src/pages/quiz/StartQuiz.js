import { Link as RouterLink } from 'react-router-dom';
// material
import {Grid, Button, Container, Stack, Typography, CardContent, Card, Checkbox} from '@mui/material';
import Iconify from "../../components/Iconify";
import Page from "../../components/Page";
import {QuizOptions} from "../../sections/app/quiz/QuizOptions";
// components




// ----------------------------------------------------------------------


const instructions = ["1) The examination will consist of 40 questions."
    ,"2) Total time to complete the coding challenge (both questions) is 40 mins. Please allocate your time accordingly.",
    "3) Unless specified you can use a calculator"
    ,"4) Please make sure you have a good and stable internet connection and power source. The coding challenge cannot be paused once it begins."
]


export default function StartQuiz() {
    return (
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>


                <Typography variant="h4" gutterBottom>

                </Typography>
                <Card>
                    <CardContent>

                        <Typography variant="h3">Instructions</Typography>

                        <Typography paddingTop={5} paddingBottom={5}>
                        {instructions.map(instruction=>(
                            <Typography >{instruction}</Typography>
                        ))}
                        </Typography>

                        <QuizOptions/>


                        <Stack paddingTop={10} direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                            <Button
                                variant="outlined"
                                component={RouterLink}
                                to="#"
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="/app/quiz"

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
