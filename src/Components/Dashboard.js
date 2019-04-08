import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state= this.props.state;
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>Welcome, {this.state.userEmail}!</h2>
            </div>
        )
    }
}


export default Dashboard
