import react from "react";
import "./SelectedOrder.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import Login from '../../Website/Login/Login.js';
import { useNavigate, useParams } from 'react-router-dom';

// const usertoken = sessionStorage.getItem('token');
const usertoken = true;

const SelectedOrder = () => {

    const user = useParams();
    console.log(user);
    
    return(
        <>
        {!usertoken ? (<Login />):(
            <div className="list flex w-[100%]">
            <SideBar />
            <div className="listContainer  flex-1 overflow-scroll">
            <NavBar />
            {user.OrderId}
            </div>
        </div>
        )}
        </>
    )
}

export default SelectedOrder

