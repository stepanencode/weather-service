import React from  'react';

import WeatherPageForm from "./WeatherPageForm";
import WeatherTable from "../../shared/Tables/WeatherTable";
import './WeatherPage.css';
import {connect} from "react-redux";

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
                    {this.props.items.length > 0 ? <WeatherTable /> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.search.items
    };
};

export default connect(mapStateToProps, null)(WeatherPage);
