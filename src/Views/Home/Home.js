import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  console.log(userType);
  if (userType) localStorage.setItem("profile", userType);
  console.log(localStorage.getItem("profile"));

  const navToDoc = () => {
    if (userType !== "doctor") {
      navigate("/overview");
    } else {
      navigate("/pati");
    }
    localStorage.setItem("profile", "");
  };

  // useEffect(() => {
  //   navToDoc();
  // }, [userType]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Box sx={{ mt: 30 }}>
        <Typography sx={{ ml: 8 }}>Login as:</Typography>
        <ButtonGroup
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button onClick={() => setUserType("doctor")}>Doctor</Button>
          <Button onClick={() => setUserType("patient")}>Patient</Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
};

export default Home;
