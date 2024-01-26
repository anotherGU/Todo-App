import React, {useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/UI/TodoForm";
import Modal from "./components/UI/Modal/Modal";
import TodoButton from "./components/UI/TodoButton";
import TodoInput from "./components/UI/TodoInput";
import "./App.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, task: "Go to shop"},
    {id: 2, task: "School"},
    {id: 3, task: "Play video games"},
  ]);

  const [modalActive, setModalActive ] = useState(false)
  
  // const [edit, setEdit] = useState('')


  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="container">
      <TodoList  todos = {posts} remove={removePost} setActive={setModalActive} >
          <TodoForm create={createPost} />
      </TodoList>
      {/* <Modal active={modalActive}  setActive={setModalActive}>
        <div className="edit__form">
              <TodoInput value={edit} />
              <TodoButton>
                  Edit
              </TodoButton>
        </div>
      </Modal> */}
    </div>
  );
}

export default App;
