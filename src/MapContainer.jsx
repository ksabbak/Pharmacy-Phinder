import React, { Component } from 'react';
import Map from './Map';

// Since there's no real backend to make a call to, we are just using this as a stand-in for real key obfuscation.
const apiKey = 'AIzaSyBB8DsRjYYv3Wcvcb4VGf1KItk8uZt8Fe4';

class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [
				{
					position: {
						lat: 100,
						lng: 100
					}
				}
			]
		};
	}

	render() {
		return (
			<div style={{ height: '100%' }}>
				<Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '400px' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
			</div>
		);
	}
}

export default MapContainer;
