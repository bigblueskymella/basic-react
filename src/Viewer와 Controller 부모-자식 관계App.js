import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./component/Controller";
import { Viewer } from "./component/Viewer";

function App() {
  // Viewer와 Controller 부모-자식 관계가 아니므로 
  // State(count)만들어서 setCount를 전달할 방법이 없다.
  // 단방향 데이터 흐름: 데이터 전달 특징. State끌어올리기 (State Lifting)
  const [count,setCount] = useState(0)
  const [text,setText]=useState("") //2️⃣
  const handleSetCount = (value)=>{
    setCount(count+value)
  }
  const handleChangeText = (e)=>{ //2️⃣
    setText(e.target.value)
  }

  // useEffect(()=>{ //2️⃣
  //   console.log("count Update!!!", count, text)
  // },[count, text])

  //3️⃣ 다른 이펙트 적용. 
  //두 번째 요소인 의존성 배열에 아무것도 전달하지 않으면,
  //useEffect는 렌더링할 때마다 콜백 함수를 실행한다.
  //(콜백: 다른 코드의 인수로서 넘겨주는 실행 가능한 코드)
  useEffect(()=>{
    console.log("component update!!")
  })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      {/* 2️⃣ */}
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section>
        {/* State변수 count의 값을 Props로 전달 */}
        <Viewer count={count}/> 
      </section>
      <section>
        {/* State값을 변경하는 함수 setState를 Props로 전달 */}
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
