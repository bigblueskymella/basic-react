import React from "react";
import './Main.css';

 const Main = (props) => { //💌1
   console.log(props) 
  
  return (
    <div className="location">
      <h1>Main</h1>
      {props.name}는 {props.location}에 있습니다.
    </div>
  );
};

export default Main;
