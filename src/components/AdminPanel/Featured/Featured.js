import React from "react";
import { MenuButton, ThreeDotsVertical } from "react-bootstrap-icons";
import "./Featured.scss";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h3 className="title">Total Revenue</h3>
                <ThreeDotsVertical fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={69} text={"69"} strokeWidth={5} styles={buildStyles({pathColor:"rgb(84, 198, 125)",textColor:"rgb(84, 198, 125)",textSize:"30px"})} />
                </div>
                <p className="title">Total Orders made today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    Previous transactions processing. Last payment may not be incuded.
                </p>

            </div>
        </div>
    )
}

export default Featured