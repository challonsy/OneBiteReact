//상수 객체

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 3;

console.log(animal);

//2. 메서드

const person = {
  name: "이정환",
  sayHi() {
    console.log("안녕");
  },
};

console.log(person);
person.sayHi();
person["sayHi"]();
