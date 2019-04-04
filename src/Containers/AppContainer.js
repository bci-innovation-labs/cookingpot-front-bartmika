import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";


class AppContainer extends Component {
  render() {
    return (
       <Router>
           <Route path="/" exact component={LoginContainer} />
           <Route path="/dashboard" exact component={DashboardContainer} />
       </Router>
    );
  }
}

export default AppContainer;
