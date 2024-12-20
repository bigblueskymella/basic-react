import React from 'react'
import "./Item.css";

const Item = ({id, content, isDone, createdDate, onDelete}) => {
  const onClickDelete=()=>{
    onDelete(id)
  }
  return (
    <div className='TodoItem'>
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone}/>
      </div>
      <div>할 일 Item {content}</div>
      {/* <div>{new Date().toLocaleDateString()}</div> */}
      {/* <div>{new Date(createdDate).toLocaleDateString()}</div> */}
      <div>{new Date().toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default Item
