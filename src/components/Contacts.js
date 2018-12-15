import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../context';


class Contacts extends Component {

    render() {
        return(
            <Consumer>{/* We are consuming the state here*/}
                {value => {
                    const { contacts }  = value;
                    return(
                        <React.Fragment> {/* Instead of div we treat it as Fragment */}
                            {/* Looping through the array using map*/}
                            {contacts.map(contact => (
                            
                            <Contact 
                                key = {contact.id}
                                contact = {contact}
                                /* 
                                Instead of passing every details pass whole contact
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}
                                */
                            />
                            ))}     
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
  }
}
export default Contacts;
