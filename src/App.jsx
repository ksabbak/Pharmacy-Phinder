import React, { Component } from 'react';
import Map from './Map';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <Form />
      </div>
    );
  }
}

export default App;
