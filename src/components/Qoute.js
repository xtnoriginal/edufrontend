import React  from "react";
import {Card, CardContent, Typography} from "@mui/material";
import Iconify from "./Iconify";


export default  class Qoute extends React.Component{

    render() {
        return(
            <Card sx ={{background: "linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)"}}
            >
                <CardContent>
                    <Iconify sx={{color: 'white'}} icon="fa:quote-left"/>
                        <Typography variant="caption" fontSize={30} color={"whitesmoke"}> 1 percent Luck, 1 Percentage, 1% Talent, 98% Never Give Up, 100% Success Formula </Typography>
                    <Iconify sx={{color: 'white'}} icon="fa:quote-right"/>
                </CardContent>
            </Card>
        );
    }

}