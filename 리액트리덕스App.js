import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./store";

const App = () => {
  const [text, setText] = useState(""); // 입력값 관리
  const todos = useSelector((state) => state.todos.items); // 상태 선택
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text)); // 새로운 Todo 추가
    setText(""); // 입력값 초기화
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); // 완료 상태 토글
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); // Todo 삭제
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            <span onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
