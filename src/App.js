import React from "react";
import { Container } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Views/Home/Home";
import Overview from "./Views/Overview/Overview";
import Patients from "./Views/Patients/Patients";
import PatientDetails from "./Views/Patients/PatientDetails/PatientDetails";
import PatientEncounter from "./Views/Patients/PatientEncounter/PatientEncounter";
import Calendar from "./Views/Calendar/Calendar";
import Notfound from "./Views/Notfound/Notfound";
import MasterLayout from "./MasterLayout/MasterLayout";
import Patient from "./Views/Patient/Patient";

const App = () => {
  //const navigate = useNavigate();
  const userType = localStorage.getItem("profile");
  console.log(userType);

  const DocRoutes = ({ children, ...rest }) => {
    const userType = localStorage.getItem("profile");
    return (
      <Routes {...rest}>
        {userType != "doctor" ? <Outlet /> : <Navigate to="/patients" />}
      </Routes>
    );
  };
  //        <Route element={<DocRoutes />}>        </Route>
  console.log(userType !== "doctor");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/overview"
          exact
          element={
            userType !== "doctor" ? (
              <Navigate to="/overview" />
            ) : (
              <Navigate to="/pati" />
            )
          }
        />
        <Route path="/patients" exact element={<Patients />} />
        <Route path="/patient" exact element={<PatientDetails />} />
        <Route path="/pati" exact element={<Patient />} />
        <Route
          path="/patient/:id/encounter"
          exact
          element={<PatientEncounter />}
        />
        <Route path="/calendar" exact element={<Calendar />} />
        <Route path="/*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
