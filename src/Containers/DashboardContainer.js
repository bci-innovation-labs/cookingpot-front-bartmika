import React, { Component } from 'react';

import Dashboard from "../Components/Dashboard";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        // OPTION 2
        let userProfileString = localStorage.getItem('user');
        var userProfileDictionary = JSON.parse(userProfileString);

        console.log(userProfileString)
        this.state={
            // OPTION 1
            firstName: localStorage.getItem("firstName"),
            lastName: localStorage.getItem("lastName"),
            email: localStorage.getItem("email"),

            // OPTION 2
            userProfile: userProfileDictionary
        }
    }
    render() {
        return (
            <Dashboard
                firstName={this.state.userProfile.firstName}
                lastName={this.state.userProfile.lastName}
                email={this.state.userProfile.email}
            />
        )
    }
}


export default DashboardContainer;
