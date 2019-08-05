import React, { Component } from "react";
import  { connect } from "react-redux";

import { WeatherHistoryTable } from "../../shared/Tables/WeatherTable";
import { getHistoryDetails } from "../../actions/requestHistoryDetails.thunk";

class RequestHistoryDetails extends Component {

    componentDidMount() {
        console.log(this.props.match.params);
        this.props.getHistoryDetails(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container mt-5">
                <WeatherHistoryTable />
            </div>
        )
    }
}

export default connect(null, {
    getHistoryDetails
})(RequestHistoryDetails);
