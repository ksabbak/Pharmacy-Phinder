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
			],
			home: {
				lat: 41.4655204,
				lng: -90.5542141
			}
		};
	}

	// shouldComponentUpdate() {} ??

	componentDidUpdate() {
		var googleMaps = this.props.googleMaps || (window.google && window.google.maps) || this.googleMaps;

		// error handling
		if (!googleMaps) {
			console.error('Google map api was not found in the page.');
			return;
		}

		this.googleMaps = googleMaps;
		this.geocoder = new googleMaps.Geocoder();
		// console.log('ADDRESS');
		// console.log(this.props);
		this.geocoder.geocode({ address: this.props.geocodeable }, (results, status) => {
			if (status !== this.googleMaps.GeocoderStatus.OK) {
				// console.log('STATUS');
				// console.log(status);
				// console.log(results);
				return;
			}

			// console.log(results);
			// console.log(status);
			const location = results[0].geometry.location;

			const newHome = {
				lat: location.lat(),
				lng: location.lng()
			};

			if (!(this.state.home.lat === newHome.lat && this.state.home.lng === newHome.lng)) {
				this.setState({ home: newHome });
			}
		});
	}

	render() {
		const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places,geocoding`;
		const loadingElement = <div style={{ height: '100%' }} />;
		const containerElement = <div style={{ height: '400px' }} />;
		const mapElement = <div style={{ height: '100%' }} />;

		return (
			<div style={{ height: '100%' }}>
				<Map
					lat={this.state.home.lat}
					lng={this.state.home.lng}
					googleMapURL={googleMapURL}
					loadingElement={loadingElement}
					containerElement={containerElement}
					mapElement={mapElement}
				/>
			</div>
		);
	}
}

export default MapContainer;
