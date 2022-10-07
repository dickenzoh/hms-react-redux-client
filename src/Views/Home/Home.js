import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className={classes.mainContainer}>
        <Grid md={3}>
          <Sidebar />
        </Grid>
        <Grid md={9}>All patients</Grid>
      </Grid>
    </>
  );
};

export default Home;
