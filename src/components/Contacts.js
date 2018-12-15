import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../context';


class Contacts extends Component {

   
 
    deleteContact  = (id) => {
        //console.log("DELETE WAS HANDLED");
        //console.log(id);

        const  {contacts} = this.state;//since obj is immutable we create newContacts
        const newContacts = contacts.filter(contact => contact.id !== id);//Remove the element if it has the id we want to delete

        this.setState({
            contacts: newContacts
        })

    }


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
                                deleteClickHandler = {this.deleteContact.bind(this,contact.id)}
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
