import React, { Component } from 'react';

import FoodDetailComponent from '../Components/FoodDetailComponent';
import { getFoodRecipeDetail } from '../API/FoodRecipeAPI';


class FoodDetailContainer extends Component {
    constructor(props) {
       super(props);

       // Since we are using the ``react-routes-dom`` library then we
       // fetch the URL argument as follows.
       const { id } = this.props.match.params;
       this.state = {
           foodID: id,
           foodDetail: {}
       }
    }

    componentDidMount() {
        getFoodRecipeDetail(
            this.state.foodID,
            (data) => {
                this.setState({
                    foodDetail: data
                });
            },
            (error) => {
                // Do nothing, but this is where error handling happens.
            }
        )
    }

    render() {
        return (
            <FoodDetailComponent
               foodDetail={this.state.foodDetail}
            />
        );
    }
}

export default FoodDetailContainer;
