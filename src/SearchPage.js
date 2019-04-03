import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchStatus: false
        }
        this.onSearchClick = this.onSearchClick.bind(this);
    }
    onSearchClick() {
        this.setState({
            searchStatus: true
        })
    }
    render() {
        const { searchStatus } = this.state;
        if (searchStatus == true) {
            return <Redirect to="/search-results" />
        }
        return (
            <div>
                <h1>Search Page</h1>
                <button onClick={this.onSearchClick}>Search</button>
            </div>
        );
    }
}

export default SearchPage;
