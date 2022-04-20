import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {AccountProfile} from "../sections/app/account/account-profile";
import {AccountProfileDetails} from "../sections/app/account/account-profile-details";
import {Box} from "@mui/system";
import Page from "../components/Page";


export default function Profile() {




    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Profile
                </Typography>

                <Card>
                    <CardContent>

                        <>
                            <Box
                                component="main"
                                sx={{
                                    flexGrow: 1,
                                    py: 8
                                }}
                            >
                                <Container maxWidth="lg">
                                    <Typography
                                        sx={{ mb: 3 }}
                                        variant="h4"
                                    >
                                        Account
                                    </Typography>
                                    <Grid
                                        container
                                        spacing={3}
                                    >
                                        <Grid
                                            item
                                            lg={4}
                                            md={6}
                                            xs={12}
                                        >
                                            <AccountProfile />
                                        </Grid>
                                        <Grid
                                            item
                                            lg={8}
                                            md={6}
                                            xs={12}
                                        >
                                            <AccountProfileDetails />
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Box>
                        </>

                    </CardContent>
                </Card>

            </Container>
        </Page>
    );
}
