import React, { useState } from 'react'

const Input = () => {
  const [text,setText]=useState("") //2️⃣2️ value추가 text추가
  const handleOnChange=(e)=>{
    // console.log(e.target.value)
    setText(e.target.value) //2️⃣ setText 실행
  }
  return (
    <div>
      <input onChange={handleOnChange} value={text}/> 
      <div>{text}</div>
    </div>
  )
}

export default Input