import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodRecipeRows extends Component {
    render() {
        const { data } = this.props;
        let elements = [];

        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            elements.push(
                <tr key={row.id}>
                    <td>
                         {row.pictureURL &&
                             <img src={row.pictureURL} alt={row.name} height="42" width="42" />
                         } 
                    </td>
                    <td>{row.name}</td>
                    <td>{row.shortDescription}</td>
                    <td>{row.score}/5</td>
                    <td>
                    View <i className="fa fa-chevron-right"></i>
                    </td>
                </tr>
            )
        }

        return elements
    }
}

class Dashboard extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">
                        <h1>Dashboard</h1>
                        <div className="col-sm-12 mx-auto mt-4 pt-4">
                            <h2>Top Weekly Menu</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Score</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                       <FoodRecipeRows data={data} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        )
    }
}


export default Dashboard
