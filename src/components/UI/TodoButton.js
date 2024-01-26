import "./TodoButton.css"

const TodoButton = ({...props}) =>{
    return(
        <button {...props} className="todo-button">
            {props.children}
        </button>
    );
}

export default TodoButton