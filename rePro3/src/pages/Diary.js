import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Viewer from "../component/Viewer";

const Diary = () => {
  const {id} = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  // console.log(params) 436p
  // console.log("다이어리", data);

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const {date, emotionId, content} = data;
    return (      
      <div>
        <div className="header_wrapper">
          <button onClick={()=>navigate(-1)}> ◀ 뒤로 가기 </button>
          <h3>{id}번째 일기</h3>
          <button onClick={goEdit}>수정하기</button>
        </div>
        <div>Diary 페이지입니다.</div>
        <Viewer content={content} emotionId={emotionId}/>
      </div>
    );
  }
};
export default Diary;
