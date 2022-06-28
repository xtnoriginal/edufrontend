import {Component} from "react";
import Page from "../../components/Page";
import {
    Card,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import Scrollbar from "../../components/Scrollbar";

import SearchNotFound from "../../components/SearchNotFound";
import SubjectListHead from "../../sections/app/subject/SubjectListHead";
import axios from "axios";
import {getAccessToken} from "../../services/common";




const TABLE_HEAD = [
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'subject', label: 'Subject', alignRight: false },
    { id: 'score', label: 'Score', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' },
];





export default  class  SubjectList extends Component{


    state = {
        papers:[],
        page : 0,
        rowsPerPage:5
    }

    componentDidMount() {

        const  link = "http://localhost:8080/app/subject/physics";
        axios.get(link,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            }})
            .then(res => {
                const papers= res.data.content;
                console.log(papers);

                this.setState({papers });
            })
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({page:0, rowsPerPage:parseInt(event.target.value, 10) });
    };


    handleChangePage = (event, newPage) => {
        this.setState({page:newPage});
    };


    handleClick = (event, name) => {
        //const selectedIndex = selected.indexOf(name);
        //useNavigate("/app/startquiz",{replace:true});
    };



    render() {





        return(
            <Page title="User">
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Physics
                        </Typography>

                    </Stack>

                    <Card>

                        <Scrollbar>
                            <TableContainer sx={{ minWidth: 800 }}>

                                <Table>
                                    <SubjectListHead
                                        headLabel={TABLE_HEAD}
                                    />



                                 {this.state.papers.slice(this.state.page *this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => {
                                        const {id, title, subject, score, status} = row;
                                        return(

                                            <TableRow
                                                hover
                                                key={id}
                                                tabIndex={-1}
                                                role="checkbox"
                                                onClick={this.handleClick}
                                            >

                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Typography variant="subtitle2" noWrap>
                                                            {title}
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">{subject}</TableCell>
                                                <TableCell align="left">{score}</TableCell>
                                                <TableCell align="left">{status ? 'Yes' : 'No'}</TableCell>

                                            </TableRow>

                                        );
                                    })}


                                     { this.state.papers.length === 0  &&  <TableBody>
                                            <TableRow>
                                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                    <SearchNotFound searchQuery="yes" />
                                                </TableCell>
                                            </TableRow>
                                        </TableBody> }

                                </Table>

                            </TableContainer>
                        </Scrollbar>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={this.state.papers.length}
                            onRowsPerPageChange={this.handleChangeRowsPerPage}
                            onPageChange={this.handleChangePage}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                        />

                    </Card>
                </Container>
            </Page>
        );
    }
}
