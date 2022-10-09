import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Patients from "./Views/Patients/Patients";
import PatientDetails from "./Views/Patients/PatientDetails/PatientDetails";
import PatientEncounter from "./Views/Patients/PatientEncounter/PatientEncounter";
import Calendar from "./Views/Calendar/Calendar";
import MasterLayout from "./MasterLayout/MasterLayout";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/patients" exact element={<Patients />} />
        <Route path="/patient" exact element={<PatientDetails />} />
        <Route
          path="/patient/:id/encounter"
          exact
          element={<PatientEncounter />}
        />
        <Route path="/calendar" exact element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
