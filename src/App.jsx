import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geocodeThis: ''
    };

    this.updateMap = this.updateMap.bind(this);
  }

  updateMap(location) {
    this.setState({ geocodeThis: location });
  }

  render() {
    return (
      <div className="App">
        <MapContainer geocodeable={this.state.geocodeThis} />
        <Form updateMap={this.updateMap} />
      </div>
    );
  }
}

export default App;
