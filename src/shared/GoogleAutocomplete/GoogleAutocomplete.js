import Autocomplete from 'react-google-autocomplete';
import React from "react";
import "./GoogleAutocomplete.css"

const GoogleAutocomplete =  () => {
    return (
        <div>
        <Autocomplete
            className="GoogleAutocomplete-form"
            onPlaceSelected={(place) => {
                console.log(place);
            }}
            fields = {["address_components", "geometry.location", "place_id", "formatted_address"]}

            types={['(regions)']}
        />
        </div>
    )
};

export default GoogleAutocomplete;