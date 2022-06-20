import {Container, Grid, Typography} from "@mui/material";
import Logo from "../Logo";


export default function Footer(){
    return(
        <Container sx={{align: 'center'}}>

            <Grid
                sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                <Logo sx = {{align: 'center'}}/>
                <Typography variant="p">Copyright @ Eduproject</Typography>
                <Typography variant="p">Copyright @ Eduproject</Typography>
            </Grid>
            <Typography variant="p">Copyright @ Eduproject</Typography>
        </Container>
    );
}
