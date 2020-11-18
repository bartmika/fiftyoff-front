import React, { Component } from "react";
import AddDealComponent from "./AddDealComponent";
import { postCreateDeal } from "../API/DealsAPI";


class AddDealContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            percentOff: "",
            storeName: "",
            address: "",
        }
        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onPercentOffChange = this.onPercentOffChange.bind(this);
        this.onStoreNameChange = this.onStoreNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

    onProductNameChange(e) {
        this.setState({
            productName: e.target.value,
        });
    };

    onPercentOffChange(e) {
        this.setState({
            percentOff: e.target.value,
        });
    };

    onStoreNameChange(e) {
        this.setState({
            storeName: e.target.value,
        });
    };

    onAddressChange(e) {
        this.setState({
            address: e.target.value,
        });
    };

    onSubmitClick(e) {
        const { productName, percentOff, storeName, address } = this.state;
        const postData = {
            productName: productName,
            percentOff: percentOff,
            storeName: storeName,
            address: address,
        };
        postCreateDeal(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        alert(responseData.message);
        this.props.history.push("/dashboard");
    }

    onFailureCallbackFunc(responseData) {
        alert(responseData.error);
    }

    render() {
        const { productName, percentOff, storeName, address } = this.state;
        return (
            <AddDealComponent
                productName={productName}
                percentOff={percentOff}
                storeName={storeName}
                address={address}
                onProductNameChange={this.onProductNameChange}
                onPercentOffChange={this.onPercentOffChange}
                onStoreNameChange={this.onStoreNameChange}
                onAddressChange={this.onAddressChange}
                onSubmitClick={this.onSubmitClick}
            />
        );
    }
}

export default AddDealContainer;
