import {React, useState} from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SideBar.scss";
import { Link, NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const Menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon.GridFill />,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <Icon.HouseFill />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <Icon.PersonFill />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Icon.GearFill />,
  },
  {
    title: "Logout",
    path: "/login",
    icon: <Icon.BoxArrowLeft />,
    action: function logout() {
      sessionStorage.clear(); window.location.reload();
    }
  },
]

const SideNavBar = () => {

  const [open, setopen] = useState(true);

    return (
      <div className={`sidebar ${open ? "w-40": "w-20" } duration-300`}>
        <div className="top"><Icon.ArrowLeftShort onClick={()=>{setopen(!open)}} className={`menutoggle  ${!open && 'rotate-180 mr-5' }`}/>
          <span className={`logo ${open ? "": "hidden" }`}>LOGO</span>
        </div><hr></hr>
        <div className="center" onMouseEnter={() => setopen(true)} onMouseLeave={() => setopen(false)}>
          <ul>
            {Menu.map((item,index)=>{
              return <li><NavLink activeClassName="active" className="nav-items" onClick={item.action} key={index} to={item.path} style={{textDecoration:"none"}} ><span className="icon">{item.icon}</span><span className={`${open ? "": "scale-0" }`}>{item.title}</span></NavLink></li>
            })}
          </ul>
        </div>
        <div className="bottom">
          {/* <div className="coloroption"></div>
          <div className="coloroption"></div> */}
        </div>
      </div>
    ); 
}

export default SideNavBar;
