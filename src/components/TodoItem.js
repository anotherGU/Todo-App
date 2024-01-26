import React, {useState} from "react";
import "./TodoItem.css"
import Check from "./UI/Check";
import TodoButton from "./UI/TodoButton";


const TodoItem = (props) =>{

    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!checked); // Инвертирование текущего значения состояния
      };

    return(
        <div className="item">
            <div className="cont">
                <Check checked={checked} onChange={handleCheckboxChange} />
             <p className={checked ? "item__title active" : "item__title"}>{props.todo.task}</p>
            </div>
            <div className="block">
                <TodoButton onClick= {() => props.remove(props.todo)}>
                    Delete
                </TodoButton>
                {/* <TodoButton onClick= {()=> props.setActive(true)}>Edit</TodoButton> */}
            </div>
            
        </div>
    );
}

export default TodoItem