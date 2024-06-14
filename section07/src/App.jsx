import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  /*useEffect(() => {
    console.log(`count:${count} / input: ${input}`);
  }, [count, input]); //두번째 인자로 받은 값이 바뀔 때 마다 첫번째 인자로 받은 콜백함수 실행
  //의존성 배열, dependenct array=deps
*/

  //1. deps에 빈배열= 마운트 되었을 때 맨 처음 한번 출력
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. deps 없으면 업뎃때마다 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
