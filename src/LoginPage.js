import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"; //STEP 2


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        //TODO: IMPLEMENT CALLING API ENDPOINT FOR LOGGING IN.
        this.setState({
            loginStatus: true
        })
    }
    render() {
        const { loginStatus } = this.state;

        if (loginStatus == true) {
            return <Redirect to="/dashboard" />
        }

        return (
            <div>
                <h1>Login</h1>
                <p>Please enter your email and password</p>
                <button onClick={this.onClick}>Login</button>
            </div>
        )
    }
}

export default LoginPage;
