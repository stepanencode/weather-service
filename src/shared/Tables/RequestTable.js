import React from "react";
import  { connect } from "react-redux";

import { getHistory } from "../../actions/requestHistoryList.thunk";
import { RequestTableRow } from "./RequestTableRow";

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
                <tbody>
                {
                    this.props.items.map(item =>
                        <RequestTableRow
                            id={item.id}
                            createdAt={item.createdAt}
                            city={item.city}
                        />)
                }
                </tbody>
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
