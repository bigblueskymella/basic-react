import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  // const name="한세사이버고등학교";
  // const location = "아현동";
  const MainProps = {
    high: "한세",
    location: "아현동",
    // favorList:["빵","밥","떡"]
  };

  return (
    <div className="App">
      hello App.js 앱 영역입니다.
      <Header/>
      {/* <Main name={name} /> */}
      <Main {...MainProps} /> 🎹
      <Footer/>
    </div>
  );
}

export default App;
// 🟠 JSX
// 자바스크립트+HTML태그 섞어서 사용하는 문법
// 자바스크립트의 확장 문법
// 닫힘규칙, img, input 닫힘 태그 반드시
// 최상위 태그 하나로 감싸야 한다

// 표현식:값으로 평가되는 식 10+20=30