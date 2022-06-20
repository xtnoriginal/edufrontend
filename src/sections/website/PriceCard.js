import React from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Divider,Typography} from "@mui/material";



export default function PriceCard() {

    return (
        <Card >
            <CardHeader sx={{align: 'center'}} title="Basic Plan" />
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="h4" align="center">
                    $ 19.99
                </Typography>
                <div >
                    <Typography align="center">Manage tasks</Typography>
                    <Typography align="center">Sync notes</Typography>
                    <Typography align="center">Set deadline</Typography>
                </div>
            </CardContent>
            <Divider variant="middle" />
            <CardActions >
                <Button variant="contained" >
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}
