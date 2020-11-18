import React, { Component } from "react";
import { Link } from "react-router-dom";


function DealDetailComponent(props) {
    return (
        <>
            <h1>Deal Details</h1>
            <br />
            <br />
            <Link to="/dashboard">Back</Link>
        </>
    );
}


export default DealDetailComponent;
