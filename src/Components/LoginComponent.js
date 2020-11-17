import React, { Component } from "react";
import { Link } from "react-router-dom";


function LoginComponent(props) {
    const { username, password, onUsernameChange, onPasswordChange, onSubmitClick } = props;
    return (
        <>
            <h1>login page</h1>
            <input id="username"
                 type="text"
                 value={username}
                 name="username"
                 placeholder="username"
                 onChange={onUsernameChange} />
            <br />
            <br />
            <input id="password"
                 type="password"
                 value={password}
                 name="password"
                 placeholder="password"
                 onChange={onPasswordChange} />
            <br />
            <br />
            <button onClick={onSubmitClick}>Submit</button>
            <br />
            <br />
            <Link to="/register">Register</Link>
            <br />
            <br />
            <Link to="/">Back</Link>
        </>
    )
}


export default LoginComponent;
