import React, { useState } from 'react'

const Date = () => {
  const [date,setDate]=useState("")
  const handleOnChange = (e)=>{
    console.log("change",e.target.value)
    setDate(e.target.value)
  }
  return (
    <div>
      <input type='date' value={date} onChange={handleOnChange}/>
    </div>
  )
}

export default Date