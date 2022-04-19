// material
import {
    Avatar, Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';
// components
import Page from '../components/Page';
import {
    ProductSort,
    ProductList,
    ProductCartWidget,
    ProductFilterSidebar
} from '../sections/@dashboard/products';
import {Box} from "@mui/system";
import {useState} from "react";

// ----------------------------------------------------------------------


const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
});

export default function Profile() {



    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Profile
                </Typography>

                <form
                    autoComplete="off"
                    noValidate
                    {...props}
                >
                    <Card>
                        <CardHeader
                            subheader="The information can be edited"
                            title="Profile"
                        />
                        <Divider />
                        <CardContent>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        helperText="Please specify the first name"
                                        label="First name"
                                        name="firstName"
                                        onChange={handleChange}
                                        required
                                        value={values.firstName}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Last name"
                                        name="lastName"
                                        onChange={handleChange}
                                        required
                                        value={values.lastName}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        value={values.email}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        onChange={handleChange}
                                        type="number"
                                        value={values.phone}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        name="country"
                                        onChange={handleChange}
                                        required
                                        value={values.country}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md={6}
                                    xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Select State"
                                        name="state"
                                        onChange={handleChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={values.state}
                                        variant="outlined"
                                    >
                                        {states.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 2
                            }}
                        >
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Save details
                            </Button>
                        </Box>
                    </Card>
                </form>

            </Container>
        </Page>
    );
}
