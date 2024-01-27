import React, {useState} from "react";
import "./TodoItem.css"
import Check from "./UI/Check";
import TodoButton from "./UI/TodoButton";
import TodoInput from "./UI/TodoInput";
import Modal from "./UI/Modal/Modal";



const TodoItem = (props) =>{

    const [checked, setChecked] = useState(false)
    const [edited, setEdited] = useState(props.todo.task)
    const [modalActive, setModalActive ] = useState(false)  

    const handleCheckboxChange = () => {
        setChecked(!checked); // Инвертирование текущего значения состояния
    };

    const handleInputChange = (event) =>{
        setEdited(event.target.value);
        console.log(edited)
    }

    function editProd(event) {
        event.preventDefault();
        const editedTask = {
            id: props.todo.id,
            task: edited,
        }
    
        props.edit(editedTask, editedTask.id);
        setModalActive(false)
    };
      
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
               <TodoButton onClick= {()=>  setModalActive(true)}>Edit</TodoButton> 
            </div>
        </div>
            <Modal active={modalActive}  setActive={setModalActive}>
                    <form className="edit__form"  onSubmit={editProd}>
                        <TodoInput value={edited}   onChange={handleInputChange}></TodoInput>
                        <TodoButton >Edit</TodoButton>
                    </form>
            </Modal> 
        </div>
    );
}

export default TodoItem