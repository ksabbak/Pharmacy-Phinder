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
    // this.geocodeAddress = this.geocodeAddress.bind(this);
  }

  updateMap(location) {
    // console.log(location);
    this.setState({ geocodeThis: location });
  }

  // componentDidUpdate() {
  //  this.geocodeAddress();
  // }

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
