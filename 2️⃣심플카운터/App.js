import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value); //🟠현재값 + 매개변수값
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}
export default App;

//State는 컴포넌트 함수 안에 만든다
//데이터 전달 방향 부모->자식 = 단방향 데이터 흐름
//이벤트 전달 방향 자식->부모  
//컨트롤의 handleSetCount함수 State를 변경하는 이벤트
