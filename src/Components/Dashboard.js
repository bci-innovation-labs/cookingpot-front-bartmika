import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email
        }
    }
    render() {
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
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Score</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>Hamburger</td>
                                        <td>The good old american Hamburger.</td>
                                        <td>5/5</td>
                                        <td>
                                        View <i className="fa fa-chevron-right"></i>
                                        </td>
                                    </tr>

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
