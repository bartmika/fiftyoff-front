import React, { Component } from "react";
import DashboardComponent from "./DashboardComponent";
import { getListDeals } from "../API/DealsAPI";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealsArray: [],
        }
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

    componentDidMount() {
        getListDeals(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        this.setState({
            dealsArray: responseData.results,
        });
    }

    onFailureCallbackFunc(responseData) {
        console.log(responseData);
    }

    render() {
        const { dealsArray } = this.state;
        return (
            <DashboardComponent
                dealsArray={dealsArray}
            />
        );
    }
}

export default DashboardContainer;
