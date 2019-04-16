import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from "../Components/Login";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false,
            email: null,
            password: null,
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onClick() {
        // This is a simple example of how authentication
        // would work. You will need to write an API
        // web-service and replace this code with making
        // API calls and validating.
        if (this.state.email === "b@m.com") {
            if (this.state.password === "123password") {

                const userProfile = {
                    firstName: "Bart",
                    lastName: "Mika",
                    email: "b@m.com"
                }

                // OPTION 1
                localStorage.setItem("firstName", userProfile.firstName);
                localStorage.setItem("lastName", userProfile.lastName);
                localStorage.setItem("email", userProfile.email);

                // OPTION 2
                localStorage.setItem("user", JSON.stringify(userProfile));
                this.setState({
                    loginStatus: true
                })
            }
        }
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {
        const { loginStatus } = this.state;
        if (loginStatus === true) {
            return <Redirect to="/dashboard" />
        }
        return (
            <Login
               onClick={this.onClick}
               onChange={this.onChange}
               email={this.state.email}
               password={this.state.password}
            />
        )
    }
}


export default LoginContainer;
