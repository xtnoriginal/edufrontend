import {Component} from "react";
import Page from "../../components/Page";
import {
    Card,
    Container, Link,
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
import {Link as RouterLink, useParams} from "react-router-dom";




const TABLE_HEAD = [
    {id: ''},
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'subject', label: 'Subject', alignRight: false },
    { id: 'score', label: 'Score', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' },
];




//TODO allow on click to start quiz


export default  class  SubjectList extends Component{


    state = {
        papers:[],
        page : 0,
        rowsPerPage:5

    }

    componentDidMount() {

        const  link = "http://localhost:8080/app/subject/Physics";
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


        console.log("yes");
    };



    render() {



        return(
            <Page title="Subject List | Eduproject">
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
                                        const  link  = '/app/startquiz/'+subject+'/'+id;
                                        return(
                                            <Link underline='none' to={link} component={RouterLink}>
                                            <TableRow
                                                hover
                                                key={id}
                                                tabIndex={-1}
                                                role="checkbox"
                                            >
                                                <TableCell align="left"></TableCell>
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
                                                <TableCell align="left"></TableCell>

                                            </TableRow>
                                            </Link>

                                        );
                                    })}


                                     { this.state.papers.length === 0  &&  <TableBody>
                                            <TableRow>
                                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                    <SearchNotFound searchQuery="Physics" />
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
