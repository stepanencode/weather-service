import Autocomplete from 'react-google-autocomplete';
import React from "react";
import  { connect } from 'react-redux';
import "./GoogleAutocomplete.css"
import {submitSearch} from "../../actions/search.thunk";

const GoogleAutocomplete = (props) => {
    return (
        <div>
        <Autocomplete
            className="GoogleAutocomplete-form"
            onPlaceSelected={(place) => {
                props.submitSearch(place.formatted_address, place.geometry.location.lat(), place.geometry.location.lng());
            }}
            fields = {["address_components", "geometry.location", "place_id", "formatted_address"]}

            types={['(regions)']}
        />
        </div>
    )
};

// export default GoogleAutocomplete;
export default connect(null, { submitSearch })(GoogleAutocomplete);
