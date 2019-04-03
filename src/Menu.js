import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //STEP 2

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;
