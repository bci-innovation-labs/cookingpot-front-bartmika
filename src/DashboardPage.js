import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //STEP 2


class DashboardPage extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>Change my profile by <Link to="/profile">clicking here</Link></p>
                <p>Search for food by <Link to="/search">clicking here</Link></p>
            </div>
        )
    }
}

export default DashboardPage;
