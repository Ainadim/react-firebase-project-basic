import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/'>Home</Link>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;