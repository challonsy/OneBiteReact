//1.spread 연산자: 흩뿌리다, 펼치다.
//->객체나 배열에 저장된 여러개 값을 흩뿌려준다.

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
//...이 스프레드

console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr2);

//2. 레스트 매개변수. 나머지 매개변수
//-> 여러개 매개변수 받아야할 대 배열로 여러개 받기

function funcB(one, ...rest) {
  console.log(one, rest[1]);
}

funcB(...arr1);
