import React, { Component } from 'react';

class FoodSearchComponent extends Component {
    render() {
        const { keyword, onChange, onSearchClick, data } = this.props;

        let listElement = [];
        for (let i = 0; i < data.length; i++) {
            let listRow = data[i];
            listElement.push(
                <li key={listRow.id}>{listRow.name}</li>
            )
        }

        return (
            <div>
                <h1>Food Search</h1>
                <input
                    placeholder="Search food"
                    value={keyword}
                    onChange={onChange}
                    name="keyword"
                />
                <button onClick={onSearchClick}>Search</button>

                <ul>
                {listElement}
                </ul>

            </div>
        );
    }
}

export default FoodSearchComponent;
