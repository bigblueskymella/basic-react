import React, { useContext } from 'react'
import Editor from '../component/Editor'
import { DiaryDispatchContext } from '../App'
import {useNavigate} from "react-router-dom"

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext)
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const {date, content, emotionId} = data;
    onCreate(date, content, emotionId);
    navigate("/", {replace:true})
  }
  return (
    <div>
      <button onClick={()=>navigate(-1)}> ◀ 뒤로 가기 </button>
          <h3>새 일기 쓰기</h3>
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New