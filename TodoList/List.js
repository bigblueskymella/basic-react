import React, { useState } from 'react';
import './List.css';
import TodoItem from './Item';

const List = ({todo, onDelete}) => {
  const [search,setSearch]=useState("");
  const onChangeSearch=(e)=>{
    console.log("검색어 : ", e.target.value)
    setSearch(e.target.value)
  }
  const getSearchResult=()=>{
    // return search ===""? todo : todo.filter((item) => item.content.includes(search))
    return search ===""? todo : todo.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className='TodoList'>
       <h3>😁 List 컴포넌트 🌴 기록한 내용 보기</h3>
       <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요."
      />
      <div className="list_wrapper">
        {/* <TodoItem/> */}
        {/* 🟠map()메서드 todo로 받아온 모든 요소를 순차적 순회하며 HTML로 변환 */}
        {/* 🔴map((item)=>()) */}
        {/* 🟠각각의 프로퍼티가 props로 전달 : todo에  할일 객체로 저장되어 있다. */}
        {/* <div>{item.content}</div> */}

        {/* {todo.map((item)=>(
          <TodoItem key={item.id}{...item}/>
        ))} */}

        {getSearchResult().map((item)=>(
          <TodoItem key={item.id} {...item} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

export default List
