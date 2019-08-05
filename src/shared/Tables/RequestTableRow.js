import React from "react";

export const RequestTableRow = (props) =>{
    return (
        <tr>
            <td>{props.createdAt}</td>
            <td>
                <a href={`/history_details/${props.id}`}>
                    {props.city}
                </a>
            </td>
        </tr>
    )
};
