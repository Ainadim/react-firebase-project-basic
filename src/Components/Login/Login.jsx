import React from 'react';
import PropTypes from 'prop-types';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

const Login = props => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider
    return (
        <div>
            <h2>Login</h2>
            <button> Google Button</button>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;