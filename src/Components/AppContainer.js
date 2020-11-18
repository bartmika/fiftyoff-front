import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexContainer from "./IndexContainer";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";
import DashboardContainer from "./DashboardContainer";
import AddDealContainer from "./AddDealContainer";
import DealDetailContainer from "./DealDetailContainer";


class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={IndexContainer} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/register" exact component={RegisterContainer} />
                <Route path="/dashboard" exact component={DashboardContainer} />
                <Route path="/deals/add"exact component={AddDealContainer} />
                <Route path="/deal/:id"exact component={DealDetailContainer} />
            </Router>
        );
    }
}

export default AppContainer;
