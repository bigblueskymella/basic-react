import { useState, useRef } from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

//보통 리스트 형태의 데이터 저장할 때 배열을 이용한다
//배열이면서 데이터베이스 역할을 수행한다
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "줄넘기 하기",
    createdDate: new Date().toLocaleDateString(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id:idRef.current,
      content,
      isDone:false,
      createdDate:new Date().toLocaleDateString(),
    }
    setTodo([newItem, ...todo])
    idRef.current+=1;
  }
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item)=>{
        if(item.id === targetId){
          return {
            ...item,
            isDone:!item.isDone, //토글(반대로)
          }
        } else {
            return item;
          }
      })
    )
  }

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
     <Header/>
     <Editor onCreate={onCreate}/>
     <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
