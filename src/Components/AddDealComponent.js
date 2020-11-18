import React, { Component} from "react";
import { Link } from "react-router-dom";


function AddDealComponent(props) {
    const {
        productName, percentOff, storeName, address, onProductNameChange,
         onPercentOffChange, onStoreNameChange, onAddressChange, onSubmitClick
     } = props;
    return (
        <>
            <h1>Add New Deal</h1>
            <p>Please fill out this form</p>
            <input id="product_name"
                 name="product_name"
          placeholder="Product Name"
             onChange={onProductNameChange}
                 type="text"
                 value={productName}
            />
            <br />
            <input id="percent_off"
                 name="percent_off"
          placeholder="Percent Off"
             onChange={onPercentOffChange}
                 type="text"
                 value={percentOff}
                  />
            <br />
            <input id="store"
                 name="store"
          placeholder="Name of Store"
             onChange={onStoreNameChange}
             value={storeName}
                 type="text"
                 />
            <br />
            <input id="address"
                 name="address"
          placeholder="Address"
             onChange={onAddressChange}
             value={address}
                 type="text" />
            <br /><br />
            <button id="add"
                  type="button"
                  onClick={onSubmitClick}>Submit
            </button>

            <br />
            <br />
            <Link to="/dashboard">Back</Link>

        </>
    );
}

export default AddDealComponent
