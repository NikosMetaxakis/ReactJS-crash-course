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
                { title }
                <button onClick={props.delTodo.bind(this, id)} style={btnStyle}>X</button>
            </p>
        </div>
    )
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}