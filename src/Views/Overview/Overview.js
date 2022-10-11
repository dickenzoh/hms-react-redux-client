import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ListView from "../../Components/ListView/ListView";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Dgrid from "../../Components/ListView/Dgrid";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid md={3} className={classes.mainContainer}>
          <Sidebar />
        </Grid>
        <Grid md={8}>
          <Searchbar />
          <ListView />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
