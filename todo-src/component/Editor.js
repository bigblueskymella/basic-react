import React, { useState,useRef } from 'react'
import './Editor.css'

const Editor = ({onCreate}) => {
  const[content,setContent] = useState("");
  const inputRef = useRef()
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    if(!content){
      inputRef.current.focus();
      return;
    }
    onCreate(content)
    setContent("") //
  }
  //🎄엔터키 눌러도 입력
  const onKeyDown = (e)=>{
    if(e.keyCode === 13)
      onSubmit();
  }

  return (
    <div className='Editor'>
      <h3>😋 Editor 컴포넌트 🌴새롭게 작성할 곳 🎹</h3>
      <input
        ref={inputRef}
        value={content} //🎄월요일30일
        onKeyDown={onKeyDown} //🎄
        placeholder='오늘의 할 일을 작성해주세요'
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
