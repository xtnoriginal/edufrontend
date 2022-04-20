import Page from "../components/Page";
import {Card, CardContent, Container, Typography} from "@mui/material";
import {SettingsNotifications} from "../sections/app/settings/settings-notifications";
import {Box} from "@mui/system";
import {SettingsPassword} from "../sections/app/settings/settings-password";


export default function Settings() {
    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Settings
                </Typography>

                <Card>
                    <CardContent>

                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                py: 8
                            }}
                        >
                            <Container maxWidth="lg">
                                <SettingsNotifications />
                                <Box sx={{ pt: 3 }}>
                                    <SettingsPassword />
                                </Box>
                            </Container>
                        </Box>


                    </CardContent>
                </Card>

            </Container>
        </Page>

    );
}
