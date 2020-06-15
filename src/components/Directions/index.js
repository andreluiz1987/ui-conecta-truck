import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// import { Container } from './styles';
const Directions = ({ destination, origin, onReady }) => {
    return (
        <MapViewDirections
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey="AIzaSyCNf8LfmEdf8eDNrmLIZn1XFBhlE9PRgbk"
            strokeWidth={3}
            strokeColor="#222"
        />
    );
}

export default Directions;
