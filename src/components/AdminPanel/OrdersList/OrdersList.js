import react from "react";
import "./OrdersList.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/Login/Login.js';
import { useNavigate } from 'react-router-dom';

const usertoken = sessionStorage.getItem('token');


const Orders = () => {
    return(
        <>
        {!usertoken ? (<Login />):(
            <div className="list">
            <SideBar />
            <div className="listContainer">
            <NavBar />
            <DataTable />
            </div>
        </div>
        )}
        </>
    )
}

export default Orders

