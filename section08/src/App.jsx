import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useState, useRef } from "react";

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetID) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetID ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetID) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== targetID;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
