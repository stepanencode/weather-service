import React from 'react';

const RequestTable = () => {
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
                        LA
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    )
};

export default RequestTable;