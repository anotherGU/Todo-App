import React from "react";
import "./TodoList.css"
import TodoItem from "./TodoItem";


const TodoList = ({todos, children, remove, setActive}) => {

    return (
        <div className="list">
           {children}
           
           {todos.map((todo) => (
               <TodoItem 
                   todo={todo}
                   remove={remove}
                   key={todo.id}
                   setActive={setActive}>
               </TodoItem>
           ))}
        </div>
    );
}

export default TodoList