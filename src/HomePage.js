import React, { Component } from 'react';
import { Link } from "react-router-dom"; //STEP 2


class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome to cooking pot app. Please login or register</p>
                <br />
                <p>To login in, <Link to="/login">click here</Link>.</p>
                <br />
                <p>To learn more about us, please <Link to="/about">click here</Link>.</p>
                <br />
                <p>Would like to contact us? If so, please <Link to="/contact">click here</Link>.</p>
                <br />
                <p>If you already have an account with us, pleaes login by <Link to="/login">clicking here</Link>.</p>
            </div>
        )
    }
}

export default HomePage;
