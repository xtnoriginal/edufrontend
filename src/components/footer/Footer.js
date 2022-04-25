import {styled} from "@mui/material/styles";
import {Container, Grid, Typography} from "@mui/material";
import Logo from "../Logo";

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
    padding: 0,
});

export default function Footer(){
    return(
        <Container>


            <Logo sx = {{align: 'center'}}/>
            <Grid
                sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >

            </Grid>
            <Typography>Copyright @ Eduproject</Typography>
        </Container>
    );
}