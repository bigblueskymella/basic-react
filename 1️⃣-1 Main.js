import React from "react";
import './Main.css';

 const Main = (props) => { //💌1
 //const Main = ({name,location}) => { //💌2
 //const Main = ({name:na, location:lo})=>{ //🟠💌3 구조 분해 할당
   console.log(props) 
  
  return (
    <div className="location">
      <h1>Main</h1>
      {props.name}는 {props.location}에 있습니다.
      {/* {name}는 {location}에 있습니다. <br/>
      {favorList.length}개의 음식을 좋아합니다.      
      */}
      {na}은 {lo}에 있습니다.
    </div>
  );
};

//🟠💌기본값을 빈 배열로 선언해둠.
//백엔드 서버 제공 데이터 prop로 전달받을 때
//예상치 못한 서버 오류 방지
Main.defaultProps={
  favorList:[]
}

export default Main;

//🟠💌1의 .표시는 불편하다
//구조분해할당으로 사용하면 편리하다
//새로운 변수명으로 값이 할당된다
