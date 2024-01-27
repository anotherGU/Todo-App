import React, {useState} from "react";
import "./TodoList.css"
import TodoItem from "./TodoItem";
import Modal from "./UI/Modal/Modal";
import TodoButton from "./UI/TodoButton";
import TodoInput from "./UI/TodoInput";


const TodoList = ({todos, children, remove, edit}) => {

    return (
        <div className="list">
           {children}
           
           {todos.map((todo) => (
               <TodoItem 
                   edit={edit}
                   todo={todo}
                   remove={remove}
                   key={todo.id}>
               </TodoItem>
           ))}
        </div>
        
    );
}

export default TodoList