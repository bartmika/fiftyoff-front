import React, { Component} from "react";
import { Link } from "react-router-dom";


function AddDealComponent(props) {
    return (
        <>
            <h1>Add New Deal</h1>
            <p>Please fill out this form</p>
            <input id="product_name"
                 name="product_name"
          placeholder="Product Name"
             onChange={null}
                 type="text" />
            <br />
            <input id="percent_off"
                 name="percent_off"
          placeholder="Percent Off"
             onChange={null}
                 type="text" />
            <br />
            <input id="store"
                 name="store"
          placeholder="Name of Store"
             onChange={null}
                 type="text" />
            <br />
            <input id="address"
                 name="address"
          placeholder="Address"
             onChange={null}
                 type="text" />
            <br /><br />
            <button id="add"
                  type="button"
                  onClick={null}>Submit
            </button>

            <br />
            <br />
            <Link to="/dashboard">Back</Link>

        </>
    );
}

export default AddDealComponent
