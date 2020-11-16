import React, { Component } from "react";
import { Link } from "react-router-dom";


function IndexComponent(props) {
    return (
        <>
            <h1>Index</h1>
            <p>lalalala</p>
            <p>
                <Link to="/login">Login</Link>
            </p>
        </>
    )
}

export default IndexComponent;
