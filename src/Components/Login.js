import React, { Component } from 'react';


class Login extends Component {
    render() {
        const { onClick, onChange, email, password } = this.props;
        return (
            <div>
                <h1>Login</h1>
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={onChange}
                    value={email}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={password}
                />
                <button onClick={onClick}>Login</button>
            </div>
        )
    }
}


export default Login;
