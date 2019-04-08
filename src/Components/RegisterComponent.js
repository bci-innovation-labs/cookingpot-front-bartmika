import React, { Component } from 'react';

class RegisterComponent extends Component {
    render() {
        const { onClick, onChange, userEmail } = this.props;
        return (
            <div>
               <h1>Register</h1>
               <br />
               <h2>Email</h2>
               <input name="userEmail" type="email" value={userEmail} onChange={onChange}/>
               <br />
               <button onClick={onClick}>Submit</button>

            </div>
        )
    }
}

export default RegisterComponent;
