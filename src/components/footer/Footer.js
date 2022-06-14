import {Container, Grid, Stack, Typography} from "@mui/material";
import Logo from "../Logo";


export default function Footer(){
    return(
        <Container sx={{align: 'center'}}>

            <Grid
                sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}
            >
                <Stack>
                    <Typography variant="p">Copyright @ Eduproject</Typography>
                </Stack>
                <Stack>
                    <Logo sx = {{align: 'center'}}/>
                </Stack>
                <Stack>
                    <Typography varian  t="p">Copyright @ Eduproject</Typography>
                </Stack>



            </Grid>
            <Typography align ="center" variant="p">Copyright @ Eduproject</Typography>
        </Container>
    );
}
