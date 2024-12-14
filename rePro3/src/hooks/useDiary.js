import { useContext, useEffect, useState } from 'react'
import { DiaryStateContext } from '../App'
import {useNavigate} from 'react-router-dom'

const useDiary = (id) => {
  console.log("here",id)
  const data = useContext(DiaryStateContext)
  const [diary, setDiary]=useState()
  const navigate = useNavigate()

  useEffect(()=>{
    const matchDiary = data.find((item) => String(item.id) === String(id))
    if (matchDiary){
      setDiary(matchDiary)
    } else {
      alert("일기가 존재하지 않습니다")
      navigate("/", {replace:true})
    }
  }, [id,data])

  return diary
}
export default useDiary //513
