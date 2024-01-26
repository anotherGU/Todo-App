import React from "react";
import "./TodoInput.css";

const TodoInput = ({...props}) => {
    return(
        <input {...props}  className="todoInput" >

        </input>
    );
}

export default TodoInput