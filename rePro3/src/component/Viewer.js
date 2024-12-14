import React from 'react'
import './Viewer.css'
import { emotionList } from '../util'

const Viewer = ({content, emotionId}) => {
  const emotionItem = emotionList.find((item)=>item.id === emotionId)
  console.log(emotionItem)
  
  return (
    <div>
      <h2>오늘의 감정</h2>
      <div>
        <img src={emotionItem.img}/>
        <div>{emotionItem.name}</div>
      </div>

      <h2>오늘의 일기</h2>
      <div>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Viewer