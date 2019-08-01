import React from  'react';
import WeatherTable from "../../shared/Tables/WeatherTable";

const RequestHistoryDetails = () => {
    return (
        <div>
            <div className="container mt-5">
                City <br/>
                Date
            </div>
            <WeatherTable />
        </div>
    )
};

export default RequestHistoryDetails;