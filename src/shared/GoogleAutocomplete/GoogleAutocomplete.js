import Autocomplete from "react-google-autocomplete";
import React from "react";
import  { connect } from 'react-redux';

import { submitSearch } from "../../actions/search.thunk";
import GoogleAutocompleteForm from "./styles";

const GoogleAutocomplete = (props) => {
    return (
        <GoogleAutocompleteForm >
        <Autocomplete
            onPlaceSelected={(place) => {
                props.submitSearch(
                    place.formatted_address,
                    place.geometry.location.lat(),
                    place.geometry.location.lng()
                );
            }}
            fields = {[
                "address_components",
                "geometry.location",
                "place_id",
                "formatted_address"]}
            types={['(regions)']}
        />
        </GoogleAutocompleteForm>
    )
};

export default connect(null, { submitSearch })(GoogleAutocomplete);
