import React, { Component } from "react";
import { Link } from "react-router-dom";


function RegisterComponent(props) {
    return (
        <>
            <h1>Register</h1>
            <Link to="/login">Login</Link>
        </>
    );
}


export default RegisterComponent;
