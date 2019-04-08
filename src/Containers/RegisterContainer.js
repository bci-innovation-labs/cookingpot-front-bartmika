import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import RegisterComponent from "../Components/RegisterComponent";

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            referrer: null
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onClick() {
        console.log(this.state);
        localStorage.setItem("userEmail", this.state.userEmail);
        this.setState({
            referrer: '/dashboard'
        })
    }

    render() {
        if (this.state.referrer !== null) {
            return <Redirect to="/dashboard" />
        }
        return (
            <RegisterComponent
                userEmail={this.state.userEmail}
                onClick={this.onClick}
                onChange={this.onChange} />
        )
    }
}

export default RegisterContainer
