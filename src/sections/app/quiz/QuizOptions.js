import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Typography
} from '@mui/material';

export const QuizOptions = (props) => (
    <form {...props}>

            <Divider />

                <Grid
                    container
                    spacing={6}
                    wrap="wrap"
                    paddingTop={5}
                    paddingBottom={5}

                >
                    <Grid
                        item
                        md={4}
                        sm={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        xs={12}
                    >
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h6"
                        >
                            Notifications
                        </Typography>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    color="primary"
                                    defaultChecked
                                />
                            )}
                            label="Timed Per Question"
                        />
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    color="primary"
                                    defaultChecked
                                />
                            )}
                            label=""
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Text Messages"
                        />
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    color="primary"
                                    defaultChecked
                                />
                            )}
                            label="Phone calls"
                        />
                    </Grid>
                    <Grid
                        item
                        md={4}
                        sm={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        xs={12}
                    >
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h6"
                        >
                            Messages
                        </Typography>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    color="primary"
                                    defaultChecked
                                />
                            )}
                            label="Email"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Push Notifications"
                        />
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    color="primary"
                                    defaultChecked
                                />
                            )}
                            label="Phone calls"
                        />
                    </Grid>
                </Grid>

            <Divider />

    </form>
);
