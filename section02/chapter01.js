//1.Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("fasly");
}

//2. Truthy한 값
//Falsy 제외모든 값은 트루시.

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

function printName(person) {
  if (!person) {
    console.log("정의되지 않음");
    return;
  }
  console.log(person.name);
}

let person = {
  name: "이민용",
};
let undefinedPerson;
printName(undefinedPerson);
