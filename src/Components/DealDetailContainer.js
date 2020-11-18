import React, { Component } from "react";
import DealDetailComponent from "./DealDetailComponent";
import { getDealDetail } from "../API/DealsAPI";

class DealDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealDetail: {},
        };
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

    componentDidMount() {
        // This is how we extract the object ID from the URL.
        const { id } = this.props.match.params;

        getDealDetail(id, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        console.log("BACKEND SERVER RETURNED:", responseData);
        this.setState({
            dealDetail: responseData,
        });
    }

    onFailureCallbackFunc(responseData) {
        console.log("BACKEND SERVER RETURNED:", responseData);
    }

    render() {
        const { dealDetail } = this.state;
        return (
            <DealDetailComponent
                dealDetail = {dealDetail}
            />
        );
    }
}

export default DealDetailContainer;
