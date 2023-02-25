import "./OrdersList.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/Login/Login.js';
import { useNavigate } from 'react-router-dom';
import {react, useState, useContext} from 'react'
import UserContext from '../../UseContext/UseContext.js';

// const usertoken = sessionStorage.getItem('token');
const usertoken = true;

const Orders = () => {

    const {user, setUser} = useContext(UserContext)
    console.log(user);

    return(
        <>
        {!usertoken ? (<Login />):(
            <div className="list flex w-[100%]">
            <SideBar />
            <div className="listContainer flex-1 overflow-scroll">
                <NavBar />
                <div onClick={()=>setUser("Changed") } className="m-2 p-2 shadow-md w-fit  hover:scale-105 cursor-pointer bg-button-color rounded-lg text-slate-100 font-bold ">Add New +</div>
                <DataTable />
            </div>
        </div>
        )}
        </>
    )
}

export default Orders

