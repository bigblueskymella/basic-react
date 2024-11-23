import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

const App = () => {
  // const name="한세";
  // 객체로 만든 다음, 스프레드 연산자 활용해 전달
  const MainProps = {
    name:"한세",
    location:"아현동"
  }
  return (
    <div>
      <Header/>
      {/* <Main name={name} location={"아현동"}/> */}
      <Main {...MainProps}/>
      <Footer/>
    </div>
  )
}

export default App