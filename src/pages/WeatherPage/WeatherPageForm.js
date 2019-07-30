import React from  'react';
import { Field, reduxForm } from 'redux-form';
import { Form,  Label } from 'reactstrap';

import GoogleAutocomplete from "../../shared/GoogleAutocomplete/GoogleAutocomplete"

let WeatherPageForm = () => {

    return (
        <div>
            <Form >
                <div className="mt-3">
                    <Label htmlFor="enter-address" className="d-none" />
                    <Field
                        name="enter-address"
                        component={GoogleAutocomplete}
                        type="text"
                        placeholder="Enter a location"
                    />
                </div>
            </Form>
        </div>
    )
};

WeatherPageForm = reduxForm({
    form: 'WeatherPageForm'
})(WeatherPageForm);

export default WeatherPageForm;