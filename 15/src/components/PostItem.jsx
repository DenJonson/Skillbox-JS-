import React from 'react'

export default function PostItem(props) {

  return (
    <div className = 'post'>
      <div className = 'post-content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
        <div>
          {props.post.date}
        </div>
      </div>
      <div className = 'post-btn'>
        <button onClick = {() => props.remove(props.post)}>Удалить</button>
      </div>
    </div>
  )
}
