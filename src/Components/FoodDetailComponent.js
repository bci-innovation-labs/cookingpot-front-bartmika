import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodDetailComponent extends Component {
    render() {
        const { foodDetail } = this.props;
        return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">

                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                              <a href="/dashboard">
                                  <i className="fas fa-tachometer-alt"></i>&nbsp;Dashboard
                              </a>
                           </li>
                          <li className="breadcrumb-item active" aria-current="page">
                              Food Details
                           </li>
                        </ol>
                      </nav>

                        <h1>Food Details</h1>

                        <div className="row mt-4 pt-3 mb-4 pb-2">
                            <div className="col-md-10 mx-auto p-2">
                                <table className="table table-bordered custom-cell-w">
                                    <tbody>
                                    <tr className="bg-dark">
                                        <th scope="row" colSpan="2" className="text-light">Food details</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-light">Name</th>
                                        <td>{foodDetail.name}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row" className="bg-light">Description</th>
                                        <td>{foodDetail.longDescription}</td>
                                    </tr>

                                    </tbody>
                                </table>

                                <div className="form-group col-md-12 mb-3 mx-auto text-center">
                                    <Link to="/dashboard" className="btn btn-success btn-lg btn-fxw mt-4">
                                    <i className="fas fa-arrow-left"></i>&nbsp;
                                    Back to Dashboard
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </main>
                </div>
            </div>
        );
    }
}

export default FoodDetailComponent
