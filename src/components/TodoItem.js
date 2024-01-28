import React, {useState} from "react";
import "./TodoItem.css"
import Check from "./UI/Check";
import TodoButton from "./UI/TodoButton";




const TodoItem = (props) =>{

    const [checked, setChecked] = useState(false)


    const handleCheckboxChange = () => {
        setChecked(!checked); // Инвертирование текущего значения состояния
    };

    const bundle = () =>{
        props.setActive(true);
        props.setElement(props.todo)
    }
    return(
        <div>
            <div className="item">
            <div className="cont">
                <Check checked={checked} onChange={handleCheckboxChange} />
             <p className={checked ? "item__title active" : "item__title"}>{props.todo.task}</p>
            </div>
            <div className="block">
                <TodoButton onClick= {() => props.remove(props.todo)}>
                    Delete
                </TodoButton>
               <TodoButton onClick= { bundle }>Edit</TodoButton> 
            </div>
        </div>
        </div>
    );
}

export default TodoItem