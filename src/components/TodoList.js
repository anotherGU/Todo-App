import React, {useState} from "react";
import "./TodoList.css"
import TodoItem from "./TodoItem";
import Modal from "./UI/Modal/Modal";
import TodoButton from "./UI/TodoButton";
import TodoInput from "./UI/TodoInput";




const TodoList = ({todos, children, remove, edit}) => {

    const [modalActive, setModalActive] = useState(false)
    const [Editing, SetEditing] = useState(null)
    const [edited, setEdited] = useState('')


    const handleInputChange = (event) =>{
        setEdited(event.target.value);
        console.log(edited)
    }

    function editProd(event) {
        event.preventDefault();
        const editedTask = {
            id: Editing.id,
            task: edited,
        }
    
        edit(editedTask, editedTask.id);
        setModalActive(false);
        setEdited("");
    };

    return (
        <div className="list">
           {children}
            
           {todos.map((todo) => (
               <TodoItem 
                   edit={edit}
                   todo={todo}
                   remove={remove}
                   key={todo.id}
                   setElement={SetEditing}
                   active={modalActive} 
                   setActive={setModalActive}
                  >
               </TodoItem>
           ))}
           <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={editProd}>
                    <TodoInput value={edited}  onChange={handleInputChange}></TodoInput>
                    <TodoButton>Edit</TodoButton>
                </form>
           </Modal>
        </div>
        
    );
}

export default TodoList