import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

import AnonNavbarComponent from "./AnonNavbarComponent";

function LoginComponent(props) {
    const { username, password, error, onUsernameChange, onPasswordChange, onSubmitClick } = props;
    const isInvalid = error !== "";
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
                        <h1>Login</h1>
                        {isInvalid &&
                            <div>
                                <Alert variant="danger">Wrong username or password</Alert>
                            </div>
                        }
                        <Form noValidate>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" value={username} onChange={onUsernameChange} isInvalid={isInvalid} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password}  onChange={onPasswordChange} isInvalid={isInvalid} />
  </Form.Group>
  <Button variant="primary" type="button" onClick={onSubmitClick}>
    Submit
  </Button>
</Form>
                        <br />
                        <Link to="/register">Register</Link>
                        </Card>
                    </Col>

                    <Col sm={3}>
                    </Col>
                </Row>
            </Container>



        </>
    )
}


export default LoginComponent;
