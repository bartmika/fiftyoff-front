import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function AnonNavbarComponent(props) {
    return (
        <Navbar bg="primary" variant="dark">
           <Navbar.Brand href="/">
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
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/login">Login</Nav.Link>
               <Nav.Link href="/register">Register</Nav.Link>
           </Nav>
        </Navbar>
    );
}

export default AnonNavbarComponent;
