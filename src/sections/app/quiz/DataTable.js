import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Radio, RadioGroup} from "@mui/material";
import FormControl from "@mui/material/FormControl";



//TODO fix the Radio group alignment error

const rows = [
    { "person": "A", "route": "runs across the beach, then climbs the ladder", "time_taken_s": 8},
    { "person": "B", "route": "walks across the beach, then climbs the ladder", "time_taken_s": 16},
    { "person": "C", "route": "runs up the slipway", "time_taken_s": 5},
    { "person": "D", "route": "walks up the slipway", "time_taken_s": 10 }
]
export default function AcccessibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Answer</TableCell>
                        {Object.keys(rows[0]).map((column,id)=> {

                            return (

                                <TableCell align="left">{column}</TableCell>
                            )

                        })}


                    </TableRow>
                </TableHead>
                <TableBody>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"

                    >
                        {rows.map((row) => {
                            const column = Object.keys(row);
                            const letters = ['A','B','C','D'];
                            let pos =0;
                            return(


                                <TableRow>

                                    <TableCell align="left">
                                        <Radio value={letters[pos++]}/>
                                        <h1>{pos}</h1>
                                    </TableCell>

                                    {column.map((value) => {
                                        return(

                                            <TableCell align="left">{row[value]}</TableCell>
                                        )

                                    })}
                                </TableRow>

                            )
                        })}

                    </RadioGroup>



                </TableBody>
            </Table>
        </TableContainer>
    );
}
