//반복문으로 배열 순회

let arr = [4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("------------------");
for (let item of arr) {
  console.log(item);
}

//2. Object.keys 사용

let person = {
  name: "이민용",
  age: 27,
  job: "체육교사",
};

let keys = Object.keys(person); //key값만 뽑아 배열화

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key, person[key]);
}

//Object.values 사용

let values = Object.values(person);

for (let val of values) {
  console.log(val);
}

//for in 사용

for (k in person) {
  console.log(k, person[k]);
}
