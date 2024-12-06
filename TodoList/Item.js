import React from 'react'
import "./TodoItem.css";

const TodoItem = ({id, content, isDone, createdDate, onDelete}) => {
  const onClickDelete=()=>{
    onDelete(id)
  }
  return (
    <div className='TodoItem'>
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone}/>
      </div>
      <div>할 일 TodoItem {content}</div>
      {/* <div>{new Date().toLocaleDateString()}</div> */}
      {/* <div>{new Date(createdDate).toLocaleDateString()}</div> */}
      <div>{new Date().toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
