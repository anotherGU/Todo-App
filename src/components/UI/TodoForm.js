import React, {useState} from "react";
import TodoButton from "./TodoButton";
import TodoInput from "./TodoInput";
import Modal from "./Modal/Modal";
import "./TodoForm.css";

const TodoForm = ({create}) =>{

    const [inputValue, setInputValue] = useState('');
    const [popupActive, setPopupActive ] = useState(false)


    const handleInputChange = (event) =>{
        setInputValue(event.target.value);
        console.log(inputValue)
    }

    const validateInput = () => {
        if(!inputValue.trim()){
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!validateInput()) {
            
            return;
          }

        const newTask = {
            id: Date.now(), 
            task: inputValue, 
            isEdit: false
        }
        
        create(newTask);
        setInputValue('');
      };

    return(
        <form onSubmit={handleSubmit}>
            <TodoInput type="text" value={inputValue} onChange={handleInputChange} />
            <TodoButton onClick={() => {
                if (!inputValue.trim()) {
                    setPopupActive(true);
                }
                }}>
                Submit
            </TodoButton>
            <Modal active={popupActive} setActive={setPopupActive}>
                Enter a task!
            </Modal>
        </form>
    );
}

export default TodoForm