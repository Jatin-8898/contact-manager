import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Contact extends Component {
  render() {
    
    const {name,email} = this.props; //Same as {this.props.name}
    return (
      <div>
        <h4>{name}</h4>
        <h4>{email}</h4>
      </div>
    )
  }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default Contact;
