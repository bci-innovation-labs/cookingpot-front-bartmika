import React, { Component } from 'react';

import FoodSearchComponent from '../Components/FoodSearchComponent';


// SIMULATED DATA, YOU ARE SUPPOSED TO WRITE AN API ENDPOINT
// AND FETCH THE DATA FROM THIS API ENDPOINT. FOR NOW HERE
// IS THE SAMPLE DATA.
const SIMULATED_DATA = {
    count: 5,
    next: null,
    previous: null,
    results: [
        {
            name: 'Hamburger',
            id: 1
        }, {
            name: 'Spagetti',
            id: 2
        }, {
            name: 'Pad Thai Noodles',
            id: 3
        }, {
            name: 'French Fries',
            id: 4
        }, {
            name: 'Steak',
            id: 5
        }
    ]
}

class FoodSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: SIMULATED_DATA.results,
            keyword: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSearchClick(e) {
        const { keyword, data } = this.state;

        function filter(keyword, data) {
            let filteredData = []
            for (let i = 0; i < data.length; i++) {
                let row = data[i];
                let isFound = row.name.includes(keyword);
                console.log(keyword, row.name, isFound);

                if (isFound) {
                    filteredData.push(row);
                }
            }
            return filteredData
        }

        const filteredData = filter(keyword, data)
        this.setState({
            data: filteredData
        })
    }

    render() {
        return (
            <FoodSearchComponent
               data={this.state.data}
               onSearchClick={this.onSearchClick}
               onChange={this.onChange}
               keyword={this.state.keyword}
            />
        );
    }


}

export default FoodSearchContainer;
