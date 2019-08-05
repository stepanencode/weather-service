import React from "react";

import { WeatherTableRow } from "./WeatherTableRow";

const WeatherTable = (props) => {
    return (
        <div className="container mt-5 table-responsive-sm">
            <table className="table">
                <thead >
                <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Weather Condition</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    props.items.map(item =>
                        <WeatherTableRow
                            dateString={item.dateString}
                            temperature={item.temperature}
                            weatherText={item.weatherText}
                            weatherIcon={item.weatherIcon}
                        />)
                }
                </tbody>
            </table>
        </div>
    )
};

export default WeatherTable;
