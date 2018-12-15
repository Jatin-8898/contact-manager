import React from 'react'
import PropTypes from 'prop-types';


const Header = (props) => {

    const {branding} = props; //this is same as {props.branding}
    return (
       <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </div>
       </nav>
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