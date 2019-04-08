import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";
import RegisterContainer from "./RegisterContainer";

class AppContainer extends Component {
  render() {
    return (
       <Router>
           <Route path="/" exact component={LoginContainer} />
           <Route path="/dashboard" exact component={DashboardContainer} />
           <Route path="/register" exact component={RegisterContainer} />
       </Router>
    );
  }
}

export default AppContainer;
