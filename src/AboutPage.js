import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //STEP 2


class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Made by us!</p>
            </div>
        )
    }
}

export default AboutPage;
