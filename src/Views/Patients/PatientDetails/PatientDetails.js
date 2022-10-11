import { ImagesearchRoller } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import SearchItem from "../../../Components/patientInfo/patientInfo";
import useStyles from "./styles";

const PatientDetails = () => {
  const location = useLocation();
  const patient = location.state;
  const navigate = useNavigate();
  const classes = useStyles();

  console.log(location);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Button
        variant="contained"
        style={{ backgroundColor: "#12824C", color: "#FFFFFF" }}
        onClick={handleBack}
      >
        Back
      </Button>
      <Grid container justifyContent="center">
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Patient's Details
        </Typography>
      </Grid>
      <Divider />
      <Grid container md={12}>
        <Box sx={{ ml: 6, width: "100%", height: 200 }}>
          <Grid md={10}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="subtitle1"
              gutterBottom
            >
              Patient Information
            </Typography>

            <SearchItem cardData={location.state} />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default PatientDetails;
