import React, { Component } from "react";
import LoginComponent from "./LoginComponent";
import { postLogin } from "../API/LoginAPI"


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccess(responseData) {
        this.props.history.push("/dashboard");
    }

    onFailure(responseData) {
        this.setState({
            error: responseData.message,
        });
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onSubmitClick(e) {
        // We extract the data from the "state" of our container.
        const { username, password } = this.state;

        // Create the object that we will send to the server.
        const postData = {
            username: username,
            password: password,
        };

        // Now make the API call to check with the server if the username
        // and password are valid.
        postLogin(postData, this.onSuccess, this.onFailure);
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <LoginComponent
                username={username}
                password={password}
                error={error}
                onUsernameChange={this.onUsernameChange}
                onPasswordChange={this.onPasswordChange}
                onSubmitClick={this.onSubmitClick}
            />
        );
    }
}


export default LoginContainer;
