import React from 'react'
import { getEmotionImgById } from '../util'
import {useNavigate} from "react-router-dom";
import './DiaryItem.css'

const DiaryItem = ({id, emotionId, content, date}) => {
  const navigate = useNavigate()
  const goDetail = () => {
    navigate(`/diary/${id}`);
  }
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className='DiaryItem'>
      <div onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)}/>
      </div>
      <div className='date_wrapper'>
        <div>{new Date(parseInt(date)).toLocaleDateString()}</div>
        <div>{content.slice(0, 25)}</div>
      </div>
      <div>
        <button onClick={goEdit}>수정하기</button>
      </div>
    </div>
  )
}

export default DiaryItem