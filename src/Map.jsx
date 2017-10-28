import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, withScriptjs, Marker } from 'react-google-maps';

const Map = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap defaultZoom={15} center={{ lat: props.lat, lng: props.lng }}>
			{props.geocoder()}
			<Marker position={{ lat: props.lat, lng: props.lng }} />
		</GoogleMap>
	))
);

export default Map;
