//동기와 비동기
console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000); //비동기적으로 작동하는 함수

console.log(3);

//JS 엔진에서 돌리는게 아니라
//웹 APIs에 콜백함수로 넘겨줬다가
//타이머가 끝나면 콜백함수를 돌려받아서 수행
