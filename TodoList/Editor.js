import React, { useState } from "react";
import "./Editor.css";

const TodoEditor = ({onCreate}) => {
  // 입력할 데이터를 저장할 State변수 content를 만든다
  const [content, setContent] =useState("")
  const onChangeContent=(e)=>{
    console.log(e.target.value)
    setContent(e.target.value)
  }

  // 에디터에서 작성한 콘텐츠의 값을 onCreate해준다
  const onSubmit=()=>{
    onCreate(content)
  }

  return (
    <div className="TodoEditor">
      <h3>😋 Editor 컴포넌트 🌴새롭게 작성할 곳 🎹</h3>
      <div className="editor_wrapper">
        <input
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default Editor;
