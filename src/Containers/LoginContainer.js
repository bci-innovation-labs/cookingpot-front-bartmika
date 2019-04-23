import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
    onClick(e) {
       e.preventDefault();

       // axios.post("https://api.mikaponics.com/api/login", {
       //     'email': this.state.email,
       //     'password': this.state.password,
       // }).then( (successResult) => { // WHEN SUCCESSFUL
       //     console.log(successResult); // For debugging purposes.
       //
       //     // // ES6
       //     // const { data } = successResult;
       //     // const { email, first_name, last_name } = data;
       //
       //     // ES5
       //     const data = successResult.data;
       //     const email = data.email;
       //     const firstName = data.first_name;
       //     const lastName = data.last_name;
       //
       //     // NOTE: The above lines are equivalent!
       //
       //     // Create our user profile object to save...
       //     const userProfile = {
       //         firstName: firstName,
       //         lastName: lastName,
       //         email: email
       //     }
       //
       //     // Save to local storage.
       //     localStorage.setItem("user", JSON.stringify(userProfile));
       //
       //     // UPDATE STATE SO THE "render()" FUNCTION GETS CALLED
       //     // AND THEN THE REDIRECT WILL OCCURE.
       //     this.setState({
       //         loginStatus: true
       //     })
       // }).catch( (errorResult) => { // WHEN ERROR OCURRED
       //     console.log(errorResult);
       // }).then( () => { // ALWAYS THIS RUNS
       //     // Do nothing.
       // });
       // return;

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

        // HERE IS WHERE WE WILL DO A RE-DIRECT TO THE DASHBOARD ONCE
        // THE LOGIN WAS SUCCESSFUL.
        if (loginStatus === true) {
            return <Redirect to="/dashboard" />
        }

        // IF THE LOGIN WAS NOT SUCCESSFUL THEN WE RENDER THIS CODE BELOW.
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
