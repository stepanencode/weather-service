import React, { Component } from "react";
import  { connect } from "react-redux";

import WeatherTable from "../../shared/Tables/WeatherTable";
import { getHistoryDetails } from "../../actions/requestHistoryDetails.thunk";

class RequestHistoryDetails extends Component {

    componentDidMount() {
        this.props.getHistoryDetails(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container mt-5">{this.props.historyDetails.city} {this.props.historyDetails.createdAt}
                <WeatherTable items={this.props.historyDetails.items} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        historyDetails: state.historyDetails
    };
};

export default connect(mapStateToProps, {
    getHistoryDetails
})(RequestHistoryDetails);
