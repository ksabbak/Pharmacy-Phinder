import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
        <Form />
      </div>
    );
  }
}

export default App;
