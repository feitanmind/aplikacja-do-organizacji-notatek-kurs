import React from "react";
import PropTypes from "prop-types"

const Note = props => {
    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.content}</td>
            <td>
                {props.date.getDate()}.{props.date.getMonth()+1}.
                {props.date.getFullYear()}
            </td>
        </tr>
    );
};

Note.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.instanceOf(Date),
};


export default Note;