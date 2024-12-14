import React, { useEffect, useReducer, useRef } from "react";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime()-1,
    content: "샘플1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime()-2,
    content: "샘플2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime()-3,
    content: "샘플3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INIT":{
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item)=>{
        return String(item.id)===String(action.data.id)?{...item, ...action.data} : item
      });
    }
    case "DELETE": {
       return state.filter((item) => String(item.id)!==String(action.targetId))
    }
    default: {
      return state;
    }
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(()=>{
    dispatch({
      type:"INIT",
      data:mockData,
    })
  },[])

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).toLocaleDateString(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate =(targetId, date, content, emotionId)=>{
    dispatch({
      type:"UPDATE",
      data: {
        id: targetId,  // id 포함
        date: new Date(date).toLocaleDateString(),
        content,
        emotionId,
      },
    })
  }

  const onDelete=(targetId)=>{
    dispatch({
      type:"DELETE",
      targetId,
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
          {/* <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New</Link>
            <Link to={"/diary"}>Diary</Link>
            <Link to={"/edit"}>Edit</Link>
          </div> */}
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
