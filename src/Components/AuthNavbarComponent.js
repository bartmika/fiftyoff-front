import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function AuthNavbarComponent(props) {
    return (
        <Navbar bg="primary" variant="dark">
           <Navbar.Brand href="/dashboard">
           <img
src="https://react-bootstrap.netlify.app/logo.svg"
width="30"
height="30"
className="d-inline-block align-top"
alt="React Bootstrap logo"
/>&nbsp;
           Fifty Off App
           </Navbar.Brand>
           <Nav className="mr-auto">
               <Nav.Link href="/dashboard">Dashboard</Nav.Link>
               <Nav.Link href="/login">Logout</Nav.Link>
           </Nav>
        </Navbar>
    );
}

export default AuthNavbarComponent;
