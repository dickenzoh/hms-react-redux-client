import { Box, TextField } from "@mui/material";
import React from "react";
import useStyles from "./styles";

const Searchbar = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Box className={classes.searchBar}>
      <TextField
        InputLabelProps={{
          style: {
            fontSize: 12,
            width: 130,
            backgroundColor: "#FFF",
            color: "#383838",
          },
        }}
        inputProps={{
          style: {
            fontSize: 12,
            height: 40,
            width: 500,
            padding: "0 0 0 10px",
            fontWeight: "bold",
          },
        }}
        label="Search by patient name"
      />
    </Box>
  );
};

export default Searchbar;
