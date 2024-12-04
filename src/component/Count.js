import React, { useState } from 'react'

const Body = () => {
  console.log("Update!!") //🟠렌더링: 변경값을 페이지에 반영하기 위해 컴포넌트 렌더링
  const [count,setCount]=useState(0)
  const onIncrease=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}

export default Body
