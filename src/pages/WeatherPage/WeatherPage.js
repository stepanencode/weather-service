import React from  'react';
import {connect} from "react-redux";

import WeatherPageForm from "./WeatherPageForm";
import { WeatherSearchTable } from "../../shared/Tables/WeatherTable";
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
                    {this.props.items.length > 0 ? <WeatherSearchTable /> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.search.items,
    };
};

export default connect(mapStateToProps, null)(WeatherPage);
