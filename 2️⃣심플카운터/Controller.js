import React from 'react'

const Controller = ({handleSetCount}) => {
// const Controller = ({dispatch}) => {
  return (
    <div>
      {/*  ()=> 없으면 즉시 실행되는 함수 호출이 된다.
      렌더링될 때 함수가 호출되고, 버튼 클릭 여부와 상관없이 함수가 실행된다 
      ()=>를 사용하면, 버튼이 클릭될 때만 실행된다 */}
      <button onClick={()=>handleSetCount(-1)}>-1</button>
      <button onClick={()=>handleSetCount(-10)}>-10</button>
      <button onClick={()=>handleSetCount(-100)}>-100</button>
      <button onClick={()=>handleSetCount(+100)}>+100</button>
      <button onClick={()=>handleSetCount(+10)}>+10</button>
      <button onClick={()=>handleSetCount(+1)}>+1</button>
      {/* <button onClick={()=>dispatchEvent({(+1)}>+1</button> 아래3️⃣ */}

      {/* <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: "DECREASE", data: 10 })}>-10</button>
      <button onClick={() => dispatch({ type: "DECREASE", data: 100 })}>-100</button>
      <button onClick={() => dispatch({ type: "INCREASE", data: 100 })}>+100</button>
      <button onClick={() => dispatch({ type: "INCREASE", data: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+1</button> */}
    </div>
  )
}

export default Controller
