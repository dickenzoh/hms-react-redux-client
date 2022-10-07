import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ListView from "../../Components/ListView/ListView";
import Searchbar from "../../Components/Searchbar/Searchbar";

const Patients = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className={classes.mainContainer}>
        <Grid md={3}>
          <Sidebar />
        </Grid>
        <Grid md={9}>
          <Searchbar />
          <ListView />
        </Grid>
      </Grid>
    </>
  );
};

export default Patients;
