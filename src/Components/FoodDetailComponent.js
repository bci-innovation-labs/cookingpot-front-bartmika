import React, { Component } from 'react';

class FoodDetailComponent extends Component {
    render() {
        const { foodDetail } = this.props;
        return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">
                        <h1>Food Details</h1>

                        <div className="row mt-4 pt-3 mb-4 pb-2">
                            <div className="col-md-10 mx-auto p-2">
                                <table className="table table-bordered custom-cell-w">
                                    <tbody>
                                    <tr className="bg-dark">
                                        <th scope="row" colSpan="2" className="text-light">Personal details</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-light">Name</th>
                                        <td>{foodDetail.name}</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        );
    }
}

export default FoodDetailComponent
