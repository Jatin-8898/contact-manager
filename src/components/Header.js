import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {

    const {branding} = props; //this is same as {props.branding}
    return (
        <div>
        <h1>{branding}</h1>
        </div>
    )
}

Header.defaultProps = {
    branding : 'Default Name'
};

/* For Inline css */
/* const headingStyle = {
    color:'blue', 
    fontSize: '50px'
}; */

Header.propTypes = {
    branding : PropTypes.string.isRequired  //this forces that string is required
};

export default Header;