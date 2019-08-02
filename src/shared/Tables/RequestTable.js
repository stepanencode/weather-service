import React from 'react';
import  { connect } from 'react-redux';
import {getHistory} from "../../actions/requestHistoryList.thunk";



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
            <tr>
                <td>07-06-2019</td>
                <td>
                    <a href={"/history_details/"}>
                        {this.props.city}
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    )
   }
}

const mapStateToProps = state => {
    return {
        city: state.search.city,
    };
};


// export default RequestTable;
export default connect(mapStateToProps, { getHistory })(RequestTable);