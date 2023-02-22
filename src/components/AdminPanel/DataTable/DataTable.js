import * as React from 'react';
import "./DataTable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: "200" },
  { field: 'password', headerName: 'Password', width: "200"},
  { field: 'email', headerName: 'Email', width: "200" },
  { field: 'hash', headerName: 'Hash', width: "200" },
  {
    field: 'userstatus', 
    headerName:'User Status', 
    width:'150', 
    renderCell:(params)=>{
      return(
        <div className={`userstatus ${params.row.userstatus}`}>
          {params.row.userstatus}
        </div>
      );
    },
  },
];


const DataTable = () => {

  const actionButton = [
    {
      field:'action',
      headerName:"Action",
      width:150,
      renderCell:(params)=>{
        return(
          <div className="actions">
            <div className="viewbutton"><Link to={`/order/${params.row.name}`}>View</Link> </div>
            <div className="deletebutton">Delete</div>
          </div>
        )
      },
    }
  ]

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setEmployeeList(response.data);
    });
  };

  getEmployees();

  return(
    <div className="datatable">
      <DataGrid
        rows={employeeList}
        columns={columns.concat(actionButton)} 
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row: any) =>  row.name + row.password + row.email + row.hash + row.userstatus}
      />
    </div>
  )
};


export default DataTable;
