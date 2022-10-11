import { Typography, IconButton, Tooltip } from "@mui/material";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MissedVideoCallOutlinedIcon from '@mui/icons-material/MissedVideoCallOutlined';
import "./patientInfo.css";

const patientInfo = (cardData) => {
  const patient = cardData.cardData;
  console.log(cardData.cardData)
  return (
    <div className="searchItem">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{patient ? `${patient.firstName} ${patient.lastName}` : "N/A"}</h1>
        <span className="siDistance">{patient.age ? `${patient.age}Yrs Old` : "N/A"}</span>
        <span className="siTaxiOp">Cash Patient</span>
        <span className="siSubtitle">
          Occupation: Engineer.
        </span>
        <Typography variant="body2">
            Gender: {patient.gender ? patient.gender : "N/A"}
          </Typography>
        <span className="siCancelOp">Special Note </span>
        <span className="siCancelOpSubtitle">
          The patient is Deaf, talk to his wife.
        </span>
      </div>
      <div >
        <div className="siRating">
          <Tooltip title="Schedule a call">
            <IconButton color='primary'>
            <CallOutlinedIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Schedule a video call">
            <IconButton color='primary'>
          <MissedVideoCallOutlinedIcon />
          </IconButton>
          </Tooltip>
        </div>
        <div className="siDetailTexts">
          <button className="siCheckButton">Open EHR</button>
        </div>
      </div>
    </div>
  );
};

export default patientInfo;