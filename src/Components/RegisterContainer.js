import React, { Component } from "react";
import RegisterComponent from "./RegisterComponent";
import { postRegister } from "../API/RegisterAPI";

class RegisterContainer extends Component {
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
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onSubmitClick(e) {
        const { username, password } = this.state;
        const postData = {
            username: username,
            password: password,
        };
        postRegister(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        alert(responseData.message);
        this.props.history.push("/dashboard");
    }

    onFailureCallbackFunc(responseData) {
        this.setState({
            error: responseData.message,
        })
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <RegisterComponent
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

export default RegisterContainer
