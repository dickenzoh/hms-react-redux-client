import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Calendar = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container className={classes.mainContainer}>
        <Grid md={2}>
          <Sidebar />
        </Grid>
        <Grid md={9}>calendar</Grid>
      </Grid>
    </>
  );
};

export default Calendar;
