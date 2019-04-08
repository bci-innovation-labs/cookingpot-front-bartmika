import React, { Component } from 'react';

import Dashboard from "../Components/Dashboard";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            userEmail: localStorage.getItem("userEmail")
        }
    }
    render() {

        return (
            <Dashboard state={this.state} />
        )
    }
}


export default DashboardContainer;
