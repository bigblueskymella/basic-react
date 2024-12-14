import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {emotionList} from "../util"
import "./Editor.css"

const Editor = ({initData, onSubmit}) => {
  const navigate = useNavigate();
  const [state,setState]=useState({
    date:"",
    emotionId:3,
    content:"",
  })
  const handleChangeDate=(e)=>{
    setState({
      ...state,
      date:e.target.value,
    })
  }
  const handleChangeContent=(e)=>{
    setState({
      ...state,
      content:e.target.value
    })
  }
  const handleSubmit=()=>{
    onSubmit(state)
  }
  const handleOnGoBack = ()=>{
    navigate(-1)
  }
  
  useEffect(()=>{
    if(initData){
      setState({
        ...initData,
        date:new Date(parseInt(initData.date))
      })
    }
  },[initData])


  return (
    <div>
      <h4>today's date</h4>
      <div>
        <input type='date' value={state.date} onChange={handleChangeDate}/>
      </div>
      <h4>오늘의 감정</h4>
      <div className='emotion_list_wrapper'>
        {emotionList.map((item)=>(<img key={item.id} src={item.img}/>))}
      </div>
      <h4>today's diary</h4>
      <div>
        <textarea
        placeholder='오늘은 어땠나요?'
        value={state.content}
        onChange={handleChangeContent}
        />
      </div>
      <div>
        <button onClick={handleOnGoBack}>취소하기</button>
        <button onClick={handleSubmit}>작성 완료</button>
      </div>
    </div>
  )
}

export default Editor