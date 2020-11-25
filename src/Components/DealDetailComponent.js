import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthNavbarComponent from "./AuthNavbarComponent";

function DealDetailComponent(props) {
    const { dealDetail } = props;
    console.log(dealDetail)
    return (
        <>
            <AuthNavbarComponent />
            <h1>Deal Details</h1>
            <br />
            <br />
            <p>
            Name: {dealDetail.productName}
            </p>
            <p>
            % Off: {dealDetail.percentOff}
            </p>
            <p>
            Store Name: {dealDetail.storeName}
            </p>
            <p>
            Address: {dealDetail.address}
            </p>
            <Link to="/dashboard">Back</Link>
        </>
    );
}


export default DealDetailComponent;
