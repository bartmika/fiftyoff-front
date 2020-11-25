import React, { Component } from "react";
import RegisterComponent from "./RegisterComponent";
import { postRegister } from "../API/RegisterAPI";

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            usernameError: "",
            password: "",
            passwordError: "",
            hasError: false,
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
        let hasError = false;
        const postData = {
            username: username,
            password: password,
        };
        if (username === "") {
            hasError = true;
            this.setState({
                usernameError: "Missing field",
            });
        } else {
            this.setState({
                usernameError: "",
            });
        }
        if (password === "") {
            hasError = true;
            this.setState({
                passwordError: "Missing field",
            });
        } else {
            this.setState({
                passwordError: "",
            });
        }

        if (hasError) {
            return;
        } else {
            postRegister(postData, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
        }
    }

    onSuccessCallbackFunc(responseData) {
        this.props.history.push("/dashboard");
    }

    onFailureCallbackFunc(responseData) {
        this.setState({
            error: responseData.message,
        })
    }

    render() {
        const { username, usernameError, password, passwordError, error } = this.state;
        return (
            <RegisterComponent
               username={username}
               usernameError={usernameError}
               password={password}
               passwordError={passwordError}
               error={error}
               onUsernameChange={this.onUsernameChange}
               onPasswordChange={this.onPasswordChange}
               onSubmitClick={this.onSubmitClick}
            />
        );
    }
}

export default RegisterContainer
