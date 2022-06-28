import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Radio} from "@mui/material";


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

                    <TableCell align="left">
                        <Radio value="A"/>
                    </TableCell>
                    {rows.map((row) => {
                        const column = Object.keys(row);
                        return(
                            <TableRow>

                                {column.map((value) => {
                                    return(

                                        <TableCell align="left">{row[value]}</TableCell>
                                    )

                                })}
                            </TableRow>

                        )
                    })}


                </TableBody>
            </Table>
        </TableContainer>
    );
}
