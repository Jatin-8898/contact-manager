import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header branding="Contact Manager"/>
       
       <div className="container">
          <Contact name="Jatin Varlyani" email ="jv@gmail.com" phone="888-8888-888"/>
          <Contact name="Jatin Varlyani" email ="jv@gmail.com" phone="888-8888-888"/>
       
       </div>
       

      </div>
    );
  }
}

export default App;
