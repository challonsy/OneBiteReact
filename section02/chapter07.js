//배열 메서드

let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 9); //배열 맨 뒤에 추가
console.log(newLength, arr1); //최종길이 반환

const popedItem = arr1.pop(); //배열 맨 뒤 제거
console.log(popedItem, arr1);

//shift 세트는 push pop 보다 느리다: 앞을 변경하기 때문
const shiftedItem = arr1.shift(); //배열 맨 앞 제거
console.log(shiftedItem, arr1);

const newLength2 = arr1.unshift(0); //배열 앞 추가
console.log(newLength2, arr1); //최종길이 반환

let arr2 = [1, 2, 3, 4, 5];
let sliced = arr2.slice(2, 5); //원본이 안바뀜
let sliced2 = arr2.slice(2);
let sliced3 = arr2.slice(-2);
console.log(sliced, sliced2, sliced3);

let con = arr1.concat(arr2);
console.log(con);
