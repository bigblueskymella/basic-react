import React from "react";

// const Main = (props) => { //💌
const Main = ({name,location}) => {
  //const {name:na, location:lo}=props; //구조 분해 할당
  // console.log(props) 
  return (
    <div>
      <h1>Main</h1>
      {/* {props.name}은 {props.location}에 있습니다. */}
      {/* {na}은 {lo}에 있습니다. */}
      {name}은 {location}에 있습니다.
    </div>
  );
};

export default Main;
