import React from "react";

export const WeatherTableRow = (props) =>{
    return (
        <tr>
            <td className="align-middle">{props.dateString}</td>
            <td className="align-middle">{props.temperature}</td>
            <td className="align-middle">{props.weatherText}</td>
            <td className="align-middle"><img className="w-25" src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt="weather"/></td>
        </tr>
    )
};
