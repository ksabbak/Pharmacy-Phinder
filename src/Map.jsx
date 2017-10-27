import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, withScriptjs, Marker } from 'react-google-maps';

// var geocoder = new googleMaps.Geocoder();

const Map = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap defaultZoom={15} center={{ lat: props.lat, lng: props.lng }}>
			<Marker position={{ lat: props.lat, lng: props.lng }} />
		</GoogleMap>
	))
);

// {console.log(geocoder.geocode({ address: '1426 W. Balmoral Ave.' }))}
// const Map = compose(withScriptjs, withGoogleMap)(props => (
// ));

export default Map;
