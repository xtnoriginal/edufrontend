import {Grid3x3} from "@mui/icons-material";
import PriceCard from "./PriceCard";
import {Grid} from "@mui/material";


export default function PriceBar ()  {
    return(
        <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
               <PriceCard/>
            </Grid>
            <Grid item xs={2} sm={4} md={4} >
                <PriceCard/>
            </Grid>
            <Grid item xs={2} sm={4} md={4} >
                <PriceCard/>
            </Grid>
        </Grid>
    );
}


