import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherPageForm from "./WeatherPageForm";
import WeatherTable from "../../shared/Tables/WeatherTable";
import Title from "./styles";

class WeatherPage extends Component {

    render() {
        return (
            <div className="mx-auto w-50 mt-5">
                <Title id="title" >
                    Autocomplete search
                </Title>
                <div id="type-selector" className="pac-controls">
                    <WeatherPageForm />
                </div>
                <div>
                    {this.props.items.length > 0 ? <WeatherTable items={this.props.items}/> : null}
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
