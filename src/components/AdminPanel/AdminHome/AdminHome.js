import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import Login from '../../Website/Login/Login.js';
import SideNavBar from "../../AdminPanel/SideBar/SideBar.js";
import AdminNavabar from "../NavBar/NavBar.js";
import './AdminHome.scss';
import Widget from "../Widget/Widget.js";
import Chart from "../Chart/Chart.js";
import Featured from "../Featured/Featured.js";
import { useNavigate } from 'react-router-dom';



const usertoken = sessionStorage.getItem('token');


function UserDashboard(){

    return(
        <>
            {!usertoken  ? (<Login />):(
                <div className="home">
                    <SideNavBar />
                    <div className="homecontainer">
                        <AdminNavabar/>
                        <div className="widgets">
                            <Widget type="orders"/>
                            <Widget type="balance"/>
                            <Widget type="sample"/>
                        </div>
                        <div className="charts">
                            <Featured />
                            <Chart />
                        </div>
                    </div>
                </div>
                
            )}
        </>
    );
};

export default UserDashboard;
