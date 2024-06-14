import { useState } from "react";

function useInput() {
  const [input, setInput] = useState();
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

const HookExam = () => {
  const [input, onChange] = useInput();
  return (
    <div>
      <input />
    </div>
  );
};

export default HookExam;
