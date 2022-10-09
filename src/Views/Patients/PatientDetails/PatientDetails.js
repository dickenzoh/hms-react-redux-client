import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";

const PatientDetails = () => {
  const location = useLocation();
  const patient = location.state;
  const navigate = useNavigate();

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
      <Typography sx={{ fontWeight: "bold" }} variant="subtitle1" gutterBottom>
        Patient Information
      </Typography>
      <Divider />
      <Grid container md={6}>
        <Typography variant="body2">
          Full Name:
          {patient ? `${patient.firstName} ${patient.lastName}` : "N/A"}
        </Typography>
      </Grid>
      <Grid container md={6}>
        <Typography variant="body2">
          First Name: {patient.firstName ? patient.firstName : "N/A"}
        </Typography>
      </Grid>
      <Grid container md={6}>
        <Typography variant="body2">
          Second Name: {patient.lastName ? patient.lastName : "N/A"}
        </Typography>
      </Grid>
      <Grid container md={6}>
        <Typography variant="body2">
          Age: {patient.age ? patient.age : "N/A"}
        </Typography>
      </Grid>
      <Grid container md={6}>
        <Typography variant="body2">
          Gender: {patient.gender ? patient.gender : "N/A"}
        </Typography>
      </Grid>
    </>
  );
};

export default PatientDetails;
