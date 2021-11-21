import React from "react";
import { useState } from "react/cjs/react.development";
import PostForm from "./components/PostForm";
import Postlist from "./components/Postlist";
import './styles/App.css';

function App() {

  let storedPosts = [];

  if (localStorage.getItem('posts')) {
    storedPosts = JSON.parse(localStorage.getItem('posts'))
  }

  const [posts, setPosts] = useState(storedPosts);
  localStorage.setItem('posts', JSON.stringify(posts));
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  return (
    <div className = 'App'>
      <PostForm create = {createPost} />
      {posts.length !== 0
        ? 
        <Postlist remove = {removePost} posts = {posts} title = {'Список комментариев'}/>
        : 
        <h1 style = {{textAlign: 'center'}}>
          Оставьте свой комментарий первым!
        </h1>}

    </div>
  );
}

export default App;
