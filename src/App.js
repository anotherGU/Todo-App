import React, {useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/UI/TodoForm";


import "./App.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, task: "Go to shop", isEdit: false},
    {id: 2, task: "School", isEdit: false},
    {id: 3, task: "Play video games", isEdit: false},
  ]);

  function editPost(editedTask, id) {
    setPosts(prevPosts => {
      return prevPosts.map(post => (post.id === id ? editedTask : post));
    });
  };


  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="container">
      <TodoList edit={editPost} todos = {posts} remove={removePost} >
          <TodoForm create={createPost} />
      </TodoList>
    </div>
  );
}

export default App;
