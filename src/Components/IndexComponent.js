import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AnonNavbarComponent from "./AnonNavbarComponent";


function IndexComponent(props) {
    return (
        <>
            <AnonNavbarComponent />
            <Container fluid>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Index</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>This is my new app, please enjoy, you can save lots of money by buying discounts.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><Link to="/login">Login</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IndexComponent;


// <h1>Index</h1>
// <p>lalalala</p>
// <p>
//     <Link to="/login">Login</Link>
// </p>
