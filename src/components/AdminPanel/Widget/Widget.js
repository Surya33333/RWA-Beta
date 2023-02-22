import React from "react";
import * as Icon from 'react-bootstrap-icons';
import "./Widget.scss";
import { Link } from "react-router-dom";


const Widget = ({type}) =>{

    let data;
    let walletbalance = 360;
    const orders = 23;
    const diff = 50;

    switch(type){
        case "orders": 
            data={
                title:"MY ORDERS",
                isMoney:false,
                value:orders,
                link:<Link to="/orders" style={{textDecoration:"none", color:"black"}}>See all Orders</Link>,
                icon:<Icon.HouseFill className="icon" style={{color:"black",backgroundColor:"skyblue"}}/>,
            };
            break;
        case "sample":
            data={
                title:"SAMPLE",
                isMoney:false,
                value:"20",
                link:<Link to="/sample" style={{textDecoration:"none", color:"black"}}>See Sample</Link>,
                icon:<Icon.Person className="icon" style={{color:"black",backgroundColor:"skyblue"}}/>,
            };
            break;
        case "balance":
            data={
                title:"WALLET",
                isMoney:true,
                value:walletbalance,
                link:<Link to="/settings" style={{textDecoration:"none", color:"black"}}>Add Money</Link>,
                icon:<Icon.Wallet className="icon" style={{color:"white",backgroundColor:"gray"}}/>,
            };
            break;
            default:
                break;
    }



    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{data.value}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <Icon.Arrow90degUp/>
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}


export default Widget