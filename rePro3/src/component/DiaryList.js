import React from 'react';
import {useNavigate} from "react-router-dom";
import DiaryItem from './DiaryItem';
import './DiaryList.css'

const DiaryList = ({data}) => {
  const navigate = useNavigate()
  const onClickNew=()=>{
    navigate("/new");
  }

  return (
    <div className='DiaryList'>DiaryList 내용보여줘 
      <ul>
        {data.map((diary) => (
          // <li key={diary.id}>
          //   <p><strong>Date:</strong> {diary.date}</p>
          //   <p><strong>Content:</strong> {diary.content}</p>
          //   <p><strong>Emotion ID:</strong> {diary.emotionId}</p>
          // </li>
          <DiaryItem key={diary.id}{...diary}/>
        ))}
      </ul>

      <div>
        <button onClick={onClickNew}>새 일기 쓰기</button>
      </div>
    </div>
  )
}

export default DiaryList