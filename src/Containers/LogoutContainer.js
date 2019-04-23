import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogoutContainer extends Component {
    render() {
        // THIS CODE WILL CLEAR THE USER SESSION FROM THE BROWSER.
        localStorage.clear();

        // ONCE OUR SESSION HAS BEEN CLEARED, WE WILL REDIRECT BACK TO THE
        // LOGIN PAGE.
        return <Redirect to="/login" />
    }
}

export default LogoutContainer;
