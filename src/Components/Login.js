import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const { onClick, onChange, email, password } = this.props;
        return (
            <div className="container-fluid">
                <div className="d-flex align-items-stretch">
                    <main id="main" role="main">
                        {/*
                        <div className="row" id="logout-message">
                            <div className="col-md-6 mx-auto alert alert-success alert-dismissible text-center fade show" role="alert">
                                <strong>You have successfully logged out.</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        */}
                        <div className="row">
                            <div className="col-sm-12 text-center">
                            <img className="img-fluid" src="./assets/img/logo.jpg" alt="Logo" width="180px" /></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mx-auto">
                                <h2 className="text-center mb-3">Sign In</h2>
                                <form id="sign-in" className="form-signin needs-validation" method="post" action="" noValidate>

                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text input-group-addon-e"><i
                                                    className="fa fa-envelope color-blue"></i></span>
                                        </div>

                                        <input
                                            id="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            onChange={onChange}
                                            value={email}
                                        />

                                    </div>

                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text input-group-addon-p"><i className="fa fa-key color-blue"></i></span>
                                        </div>
                                            <input
                                                id="password"
                                                className="form-control form-control-lg"
                                                minLength="5"
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                onChange={onChange}
                                                value={password}
                                            />
                                        <div id="password-error" className="invalid-feedback"></div>
                                    </div>
                                    <div id="email-error" className="invalid-feedback"></div>


                                    <div className="custom-control custom-checkbox mb-3 mt-3">
                                        <br/>
                                    </div>

                                    <button onClick={onClick} className="btn btn-lg btn-primary btn-block">Sign In</button>


                                    <h5 className="text-center mt-3 mb-3">
                                         <Link to="/register" className="text-primary plain-link">Register</Link>
                                    </h5>

                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}


export default Login;
