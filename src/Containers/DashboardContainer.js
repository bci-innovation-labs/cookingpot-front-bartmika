import React, { Component } from 'react';

import Dashboard from "../Components/Dashboard";
import { getFoodRecipes } from "../API/FoodRecipeAPI";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        // OPTION 2
        let userProfileString = localStorage.getItem('user');
        var userProfileDictionary = JSON.parse(userProfileString);

        this.state={
            userProfile: userProfileDictionary,
            foodRecipesData: [],
            searchTerm: null,
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        getFoodRecipes(
            this.state.searchTerm,
            {},
            (data) => {
                this.setState({
                    foodRecipesData: data
                });
            },
            (error) => {
                // Do nothing, but this is where error handling happens.
            }
        )
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
        this.componentDidMount()
    }

    render() {
        return (
            <Dashboard
                firstName={this.state.userProfile.firstName}
                lastName={this.state.userProfile.lastName}
                email={this.state.userProfile.email}
                data={this.state.foodRecipesData}
                searchTerm={this.state.searchTerm}
                onChange={this.onChange}
            />
        )
    }
}


export default DashboardContainer;
