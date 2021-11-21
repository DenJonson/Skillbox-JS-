import React from 'react';
import { useState } from 'react';

export default function PostForm({create}) {

  const [post, setPost] = useState({title: '', body: ''});
  let todaysDate = new Date();
  todaysDate = `${todaysDate.getDate()}.${todaysDate.getMonth()}.${todaysDate.getFullYear()}  ${todaysDate.getHours()}:${todaysDate.getMinutes()}:${todaysDate.getSeconds()}`

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, 
      id: Date.now(),
      date: todaysDate,
    }
    create(newPost);
    setPost({title: '', body: ''});
  } 

  return (
    <form>
      <input
        type = 'text' 
        placeholder = 'Ваше имя' 
        value = {post.title}
        onChange = {e => {setPost({...post, title: e.target.value})}}
      />
      <input
        type = 'text' 
        placeholder = 'Текст комментария' 
        value = {post.body}
        onChange = {e => {setPost({...post, body: e.target.value})}}
      />
      <button onClick = {addNewPost}>Оставить комментрий</button>
    </form>
  )
}
