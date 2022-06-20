import {
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
                            Options
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

                    </Grid>

                </Grid>

            <Divider />

    </form>
);
