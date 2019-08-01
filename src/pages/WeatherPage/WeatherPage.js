import React from  'react';

import WeatherPageForm from "./WeatherPageForm";
import WeatherTable from "../../shared/Tables/WeatherTable";
import './WeatherPage.css';

class WeatherPage extends React.Component {

    render() {
        return (
            <div className="mx-auto w-50 mt-5">
                <div id="title" className="WeatherPage-title">
                    Autocomplete search
                </div>
                <div id="type-selector" className="pac-controls">
                    <WeatherPageForm />
                </div>
                <div>
                    <WeatherTable />
                </div>
            </div>
        )
    }
}

export default WeatherPage;