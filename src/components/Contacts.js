import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {

   state = {
        contacts :[
            {
                id:1,
                name:"Jatin Varlyani",
                email:"jatin@gmail.com",
                phone:"8806502484"
            },
            {
                id:2,
                name:"Dwane Johson",
                email:"johson@gmail.com",
                phone:"8754589525"
            },
            {
                id:3,
                name:"Missin Smith",
                email:"smith@gmail.com",
                phone:"8547845798"
            },
            {
                id:4,
                name:"Zeno Brad",
                email:"zeno@gmail.com",
                phone:"8856785457"
            },
        ]
    }
 
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

        const { contacts }  = this.state;

        return (
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
  }
}
export default Contacts;
