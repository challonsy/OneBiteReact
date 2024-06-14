//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, me, four = 5] = arr;

console.log(one, two, me, four);
console.log(arr);

//2. 객체의 구조 분해 할당

let person = {
  name: "이민용",
  age: 27,
  job: "체육교사",
};

let { name, age, job: occupation } = person;
console.log(name, age, occupation);

//3. 객체의 구조분해 할당을 이용해 함수의 매개변수를 받는 방법

const func = ({ name, age, job }) => {
  console.log(name, age, job);
};

func(person);
