//콜백 함수: 인수로서 전달된 함수

function main(value) {
  console.log("나는 메인");
  value();
}

function sub() {
  console.log("나는 서브");
}

main(sub);

//콜백함수의 활용
function repeat(count, callback, k) {
  for (let i = 1; i < count; i++) {
    callback(i * k);
  }
}

repeat(
  5,
  function (idx) {
    console.log(idx);
  },
  3
);
