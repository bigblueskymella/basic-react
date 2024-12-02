import React from "react";
import "./Main.css";

const Main = () => {
  const showIntroduction = () => {
    alert("블루보틀에 오신 것을 환영합니다!");
  };

  return (
    <main>
      <div>
        <h2 className="welcome">WELCOME EVERYONE</h2>
        <div className="hello">
          블루보틀에 오신 것을
          <br /> 환영합니다.
        </div>
        <button onClick={showIntroduction}>블루보틀 소개</button>
      </div>
    </main>
  );
};

export default Main;
