import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const deleteUser = () => {
  console.log("deleteed");
};

const renderDetailsButton = (params) => {
  return (
    <strong>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          console.log("clicked");
        }}
      >
        EHR
      </Button>
    </strong>
  );
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "super-app-theme--header",
    disableClickEventBubbling: true,
    headerAlign: "center",
    width: 90,
  },
  {
    field: "firstName",
    headerClassName: "super-app-theme--header",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerClassName: "super-app-theme--header",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerClassName: "super-app-theme--header",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "gender",
    headerClassName: "super-app-theme--header",
    headerName: "Gender",
    width: 160,
  },
  {
    field: "fullName",
    headerClassName: "super-app-theme--header",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    headerClassName: "super-app-theme--header",
    headerName: "Action",
    width: 160,
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={deleteUser(params.id)}
      />,
    ],
  },
];

const rows = [
  { id: 1, lastName: "Ntinya", firstName: "Vale", age: 23, gender: "female" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 18, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 21, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 22, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 23, lastName: "Snow", firstName: "Jon", age: 35 },
];

const ListView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    console.log(rowData);
    console.log("item clicked");
    navigate("/patient", { state: rowData });
    console.log("item clicked");
  };

  return (
    <Box
      className={classes.listView}
      sx={{
        height: 400,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "rgba(255, 7, 0, 0.55)",
          fontSize: 12,
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        // checkboxSelection
        disableSelectionOnClick
        //onRowClick={handleRowClick}
        onRowClick={(rowData) => handleRowClick(rowData.row)}
        experimentalFeatures={{ newEditingApi: true }}
        rowHeight={25}
      />
    </Box>
  );
};

export default ListView;
