import React from 'react'
import PropTypes from 'prop-types';

export default function TodoItem(props) {
    let setStyle = () => {
        return {
            background: "#a1a1a1",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: props.todo.completed ?
                "line-through" : "none"
        }
    }

    const { id, title } = props.todo 

    return (
        <div style={setStyle()}>
            <p>
                <input type="checkbox" 
                onChange={props.markComplete.bind(this, id)}/>
                { title }</p>
        </div>
    )
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
