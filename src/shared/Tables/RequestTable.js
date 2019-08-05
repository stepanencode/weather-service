import React from "react";
import  { connect } from "react-redux";

import { getHistory } from "../../actions/requestHistoryList.thunk";

const renderItems = (items) => {
    return items.map(item => {
        return (
            <tr>
                <td>{item.createdAt}</td>
                <td>
                    <a href={`/history_details/${item.id}`}>
                        {item.city}
                    </a>
                </td>
            </tr>
        );
    });
};

class RequestTable extends React.Component {
    componentDidMount() {
        this.props.getHistory()
    }

    render () {
        return (
            <table className="table">
                <thead >
                <tr>
                    <th>Date</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>{renderItems(this.props.items)}</tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.history.items,
    };
};

export default connect(mapStateToProps, { getHistory })(RequestTable);
