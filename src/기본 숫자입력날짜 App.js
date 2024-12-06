import "./App.css";
import Body from "./component/Count";
import Input from "./component/Input";
import Date from "./component/Date";

function App() {
  return (
    <div className="App">
      <h2>Count 숫자 더하기</h2>
        <Body />
      <h2>Input 사용자 입력 관리</h2>
        <Input />
      <h2>Date 날짜 입력</h2>
        <Date/>
    </div>
  );
}

export default App;
