import React, { useContext } from "react";
import useDiary from "../hooks/useDiary";
import { replace, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const data = useDiary(id);
  const {onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const onSubmit = (data) => {
    // if(window.confirm("일기 수정하겠습니까?")){
      const {date,content,emotionId}=data;
      onUpdate(id, date, content, emotionId)
      navigate("/", {replace:true})
    // }
  }

  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요?")){
      onDelete(id)
      navigate("/", {replace:true})
    }
  }

  if (!data) {
    return <div>일기를 불러오고 있습니다... </div>;
  } else {
    return (
      <div>
        <button onClick={() => navigate(-1)}> ◀ 뒤로 가기 </button>
        일기 수정페이지
        <button onClick={onClickDelete}>삭제하기</button>

        <Editor initData={data} onSubmit={onSubmit}/>
      </div>
    );
  }
};

export default Edit;
