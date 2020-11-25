import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import AnonNavbarComponent from "./AnonNavbarComponent";


function RegisterComponent(props) {
    const { onSubmitClick, onUsernameChange, onPasswordChange, error, username, password, usernameError, passwordError } = props;
    return (
        <>
        <AnonNavbarComponent />
        <br />
        <Container>
            <Row>
                <Col sm={3}>
                </Col>
                <Col sm={6}>
                    <Card body>
                        <h1>Register</h1>
                        <Form noValidate>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" value={username} onChange={onUsernameChange} isInvalid={usernameError !== ""} />
    <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password}  onChange={onPasswordChange} isInvalid={passwordError !== ""} />
    <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
  </Form.Group>
  <Button variant="primary" type="button" onClick={onSubmitClick}>
    Submit
  </Button>
</Form>
                        <br />
                        <br />
                        <Link to="/login">Login</Link>
                    </Card>
                </Col>
                <Col sm={3}>
                </Col>
            </Row>
        </Container>


        </>
    );
}


export default RegisterComponent;
