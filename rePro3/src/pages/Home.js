import React, { useContext, useEffect } from 'react'
import Editor from '../component/Editor'
import DiaryList from '../component/DiaryList'
import { DiaryStateContext } from '../App'
import {useSearchParams} from 'react-router-dom'

const Home = () => {
  const [searchParams, setSearchParams]=useSearchParams()
  console.log(searchParams.get("sort"))

  const data = useContext(DiaryStateContext)
  // useEffect(()=>{},[data])
  return (
    <div>
      <Editor
      initData={{
        date:new Date().getTime(),
        emotionId:4,
        content:"이전에 작성했던 내용"
      }}
      onSubmit={()=>alert("작성 완료!")}/>

      <DiaryList data={data}/>
    </div>
  )
}

export default Home