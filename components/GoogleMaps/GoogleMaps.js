import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const defaultCenter = { lat: 54.828221, lng: 25.130834 }; //Vilnius Grand Resort

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={defaultCenter}
            defaultOptions={defaultOptions}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    ))
);

export default RegularMap;