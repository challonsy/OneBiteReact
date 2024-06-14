//객체

let obj1 = new Object();
let obj2 = {}; //객체 리터럴 방식

let person = {
  name: "이미뇽",
  age: 27,
  occupation: "체육교사",
};

//새로운 프로퍼티 추가
person.nickname = "미친개";
person["애인"] = "서민정";

console.log(person);

let result1 = "name" in person;
console.log(result1);
