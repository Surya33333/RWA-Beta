import React from "react";
import "./Chart.scss";
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{name:"January" , total:120},
{name:"Febraury" , total:1400},
{name:"March" , total:1600},
{name:"April" , total:1200},
{name:"May" , total:1150},
{name:"June" , total:1300},
{name:"July" , total:1000},
{name:"August" , total:900},
{name:"September" , total:1000},
{name:"October" , total:900},
{name:"November" , total:560},
{name:"December" , total:1600},
];


const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last Year Revenue</div>
            <ResponsiveContainer width="100%" aspect={2/1} >
                <AreaChart width={730} height={250} data={data} 
                    margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" fontWeight="bold" fontSize="x-small"/>
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart