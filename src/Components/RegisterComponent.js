import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import AnonNavbarComponent from "./AnonNavbarComponent";


function RegisterComponent(props) {
    const { onSubmitClick, onUsernameChange, onPasswordChange, error, username, password } = props;
    return (
        <>
        <AnonNavbarComponent />
            <h1>Register</h1>
            <input id="username"
            name="username"
            type="text"
            onChange={onUsernameChange}
            placeholder="Username" />
            <br />
            <br />
            <input id="password"
            name="password"
            type="password"
            onChange={onPasswordChange}
            placeholder="Password" />
            <br />
            <br />
            <button id="submit" type="button" onClick={onSubmitClick}>Submit</button>
            <br />
            <br />
            <Link to="/login">Login</Link>
            <br />
            <br />
            <Link to="/">Back</Link>
        </>
    );
}


export default RegisterComponent;
