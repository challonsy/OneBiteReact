import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useMemo, useReducer, useRef, useCallback, createContext } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "거침킥 보기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "저녁 먹기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetID ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetID);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
//컴포넌트 안쪽에서 선언하면 리렌더링 될때마다
//새로 컨텍스트 생성하게 되니까 굳이 안에?

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetID) => {
    dispatch({
      type: "UPDATE",
      targetID: targetID,
    });
  }, []);

  const onDelete = useCallback((targetID) => {
    dispatch({
      type: "DELETE",
      targetID: targetID,
    });
  }, []); //빈 뎁스로 마운트될때만 함수생성

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
