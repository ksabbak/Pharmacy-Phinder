import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, InfoWindow, withScriptjs, Marker } from 'react-google-maps';

const Map = compose(withScriptjs, withGoogleMap)(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
		<Marker position={{ lat: -34.397, lng: 150.644 }} />
	</GoogleMap>
));

export default Map;
