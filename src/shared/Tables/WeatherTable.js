import React from 'react';
import { connect } from 'react-redux';

const renderItems = (items) => {
    return items.map(item => {
        return (
            <tr>
                <td className="align-middle">{item.dateString}</td>
                <td className="align-middle">{item.temperature}</td>
                <td className="align-middle">{item.weatherText}</td>
                <td className="align-middle"><img className="w-25" src={`http://openweathermap.org/img/wn/${item.weatherIcon}@2x.png`} alt="weather"/></td>
            </tr>
        );
    });
};

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
                <tbody>{renderItems(props.items)}</tbody>
            </table>
        </div>
    )
};

const mapStateToPropsSearch = state => {
    return {
        items: state.search.items
    };
};

export const WeatherSearchTable = connect(mapStateToPropsSearch, null)(WeatherTable);

const mapStateToPropsHistory = state => {
    return {
        items: state.historyDetails.items
    };
};

export const WeatherHistoryTable = connect(mapStateToPropsHistory, null)(WeatherTable);
