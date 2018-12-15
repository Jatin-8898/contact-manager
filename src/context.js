import React, { Component } from 'react'
const Context = React.createContext();

const reducer  = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact=> contact.id !== action.payload)//payload same as id
            }
    
        default:
            return state;
    }
}
export class Provider extends Component {
    
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
        ],
        dispatch: action => this.setState(state => reducer(state,action))
        
    };

    render(){
        return (
            /* We are passing the whole state of application in the Provider */
            <Context.Provider value = {this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer  = Context.Consumer;
