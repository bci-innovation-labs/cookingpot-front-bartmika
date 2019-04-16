import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email
        }
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Welcome, {this.state.firstName} {this.state.lastName}!</h2>
                <p>Your email is {this.state.email} and you have not logged on for a 1 month</p>
            </div>
        )
    }
}


export default Dashboard
