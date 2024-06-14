import { useReducer } from "react";

//실제로 상태 변환시키는 함수
//왜 콜백으로는 선언이 안되지?
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}
const Exam = () => {
  //dispatch: 방송하다, 급송하다: 상태변화가 있어야한다는 사실을 알리는 함수.
  //직접 변경하는 함수는 따로 만들어야한다
  const [state, dispatch] = useReducer(reducer, 0); //변환함수와 state 초기값

  const onClickPlus = () => {
    dispatch({
      //액션객체를 인수로
      type: "INCREASE",
      data: 1, //이만큼 증가시킬것
    });
  };
  const onClickMinus = () => {
    dispatch({
      //액션객체를 인수로
      type: "DECREASE",
      data: 1, //이만큼 감소
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
