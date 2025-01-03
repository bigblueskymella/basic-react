import { useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

//보통 리스트 형태의 데이터 저장할 때 배열을 이용한다
//배열이면서 데이터베이스 역할을 수행한다
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "줄넘기 하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3); //💌
  const onCreate = (content)=>{
    const newItem = {
      //id:0, //💌
      id:idRef.current, //💌
      content,
      isDone:false,
      // createdDate:new Date().getTime(),
      createdDate:new Date().toLocaleString()
    }
    setTodo([newItem, ...todo])
    idRef.current += 1; //💌
    // 새로 추가한 아이템 항상 id:0 이 되면 중복 아이디가 됨 💌useRef(3)추가
  }
  const [todo, setTodo] = useState(mockTodo); //컴포넌트검사App클릭hooks클릭

  const onDelete = (targetId)=>{
    setTodo(todo.filter((item)=>item.id!==targetId))
  }

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onDelete={onDelete}/>
    </div>
  );
}

export default App;
