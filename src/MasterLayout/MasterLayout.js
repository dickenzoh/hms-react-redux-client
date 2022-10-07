import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import useStyles from "./styles";

const MasterLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className={classes.mainContainer}>
        <Grid md={3}>
          <Sidebar />
        </Grid>
        <Grid md={9}>Home</Grid>
      </Grid>
    </>
  );
};

export default MasterLayout;
