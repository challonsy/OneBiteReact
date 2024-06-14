//배열 메서드
//요소 순회 및 탐색 메서드 5가지

//1.forEach: 모든 요소에 특정 동작을 수행시킴

let arr = [1, 2, 3];
arr.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

arr.forEach((item) => {
  console.log("배열요소", item);
});
let doubledArr = [];
arr.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

//2.includes: 배열에 특정 요소가 있는지 확인

console.log(arr.includes(3));

//3.indexOf: 특정 요소의 인덱스 반환

let idx = arr.indexOf(2);
console.log(idx);

//4.findIndex: 콜백함수를 만족하는 첫 요소의 인덱스 반환

const foundIndex = arr.findIndex((item) => item % 2 === 1);

console.log(foundIndex);

//5.find: dinfIndex랑 같은데 해당 요소 인덱스가 아니라 값을 반환
