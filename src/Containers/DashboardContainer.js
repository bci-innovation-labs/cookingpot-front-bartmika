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
        }
    }

    componentDidMount() {
        getFoodRecipes(
            null,
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

    render() {
        return (
            <Dashboard
                firstName={this.state.userProfile.firstName}
                lastName={this.state.userProfile.lastName}
                email={this.state.userProfile.email}
                data={this.state.foodRecipesData}
            />
        )
    }
}


export default DashboardContainer;
