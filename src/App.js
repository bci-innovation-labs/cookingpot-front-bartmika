import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //STEP 2

import HomePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";
import ContactPage from "./ContactPage.js";
import LoginPage from "./LoginPage.js";
import Menu from "./Menu.js";
import DashboardPage from "./DashboardPage.js";
import ProfilePage from "./ProfilePage.js";
import SearchPage from "./SearchPage.js";
import SearchResultPage from "./SearchResultPage.js";

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <Menu />
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/profile" exact component={ProfilePage} />
                <Route path="/search" exact component={SearchPage} />
                <Route path="/search-results" exact component={SearchResultPage} />
            </Router>
        </div>
    );
  }
}

export default App;
