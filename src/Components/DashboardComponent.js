import React, { Component} from "react";
import { Link } from "react-router-dom";


function DashboardComponent(props) {
    return (
        <>
            <p>Dashboard</p>
            <Link to="/deals/add">Add New Deal</Link>
            <br />
            <br />
            <Link to="/login">Logout</Link>
        </>
    );
}

export default DashboardComponent
