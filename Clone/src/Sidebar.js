import React from "react";
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';

function Sidebar()
{
    const recentItem =(topic) => 
        (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
        )
    
    return(
        <div className="sidebar">
            <div className="sidebar_top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UTnECzaMFIGqI2nMwXm5Ett51sF1Hu34jQ&usqp=CAU"alt="" />
                <Avatar className="sidebar_avatar"/>
                <h2>Nidhi Singh</h2>
                <h4>nidsingh10@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">3007</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className="sidebar_statNumber">8024</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("Student")}
                {recentItem("PES")}
                {recentItem("Stack Developer")}
            </div>
        </div>
    )
}

export default Sidebar