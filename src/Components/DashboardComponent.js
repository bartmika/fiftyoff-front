import React, { Component} from "react";
import { Link } from "react-router-dom";

import AuthNavbarComponent from "./AuthNavbarComponent";


function DealsItem(props) {
    const { id, percentOff, productName } = props.item;
    return (
        <tr key={id}>
           <td>{productName}</td>
           <td>{percentOff}%</td>
           <td>
               <Link to={`/deal/${id}`}>View</Link>
           </td>
        </tr>
    );
}

function DealsTable(props) {

    function renderRow(item) {
        return <DealsItem item={item} />;
    }

    const { array } = props;
    return (
        <>
            <h2>Latest Deals</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>% Off</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {array.map(renderRow)}
                </tbody>
            </table>
        </>
    );
}


function DashboardComponent(props) {
    const { dealsArray } = props;
    return (
        <>
            <AuthNavbarComponent />
            <p>Dashboard</p>
            <Link to="/deals/add">Add New Deal</Link>
            <br />
            <br />
            <DealsTable array={dealsArray} />
            <br />
            <br />
            <Link to="/login">Logout</Link>
        </>
    );
}

export default DashboardComponent
