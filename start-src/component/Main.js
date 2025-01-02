import React, { useState } from 'react'

//🟠구조 분해 할당
const Main = ({high, location, favorList}) => {
  const [count,setCount]=useState(0) //리액트훅
  function handleOnclick(){
    alert("버튼 클릭했습니다")``
  }
  function onIncrease(){
    //console.log(count+1)
    setCount(count+1)
  }
  function onDecrease(){
    setCount(count-1)
  }
// const Main = ({high:hi, location:lo, favorList}) => {
  // console.log(props) //객체
  return (
    <div>
      <h2>카운트 만들기</h2>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>클릭 만들기!</h2>
      <button onClick={handleOnclick}>클릭하세요!</button>

      main
      {/* 학교 이름은 {hi}입니다
      {hi}는 {lo}에 있습니다. <br/> */}
      학교 이름은 {high}입니다
      {high}는 {location}에 있습니다. <br/>
      {favorList.length}개의 음식을 좋아합니다.      
    </div>
  )
}

//🟠💌기본값을 빈 배열로 선언해둠.
//백엔드 서버 제공 데이터 prop로 전달받을 때
//예상치 못한 서버 오류 방지
Main.defaultProps={
  favorList:[]
}

export default Main

//rafce