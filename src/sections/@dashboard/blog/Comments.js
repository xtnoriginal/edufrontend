import {Avatar, Button, Divider, Grid, Paper} from "@mui/material";
import React from "react";
import {Form} from "formik";


export  default class Comments extends  React.Component{

    render() {
        const imgLink =
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

        return(

            <div style={{ padding: 14 }} >
                <h1>Comments</h1>
                <Paper style={{ padding: "40px 20px" }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                       @t </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                        </Grid>
                    </Grid>
                </Paper>

            </div>

        );
    }

}