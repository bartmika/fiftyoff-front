import React, { Component } from "react";
import { Link } from "react-router-dom";


function RegisterComponent(props) {
    const { onSubmitClick, onUsernameChange, onPasswordChange, error, username, password } = props;
    return (
        <>
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
        </>
    );
}


export default RegisterComponent;
