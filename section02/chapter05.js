//원시타입과 객체 타입
let v1 = 1;
let v2 = v1;
v2 = 2;
console.log(v1, v2);

let o1 = { name: "이미뇽" };
let o2 = o1; //얕은 복사
let o3 = { ...o1 }; //깊은 복사

o2.name = "최미뇽";

console.log(o1, o2, o3);

//객체 타입의 비교

o2.name = "이미뇽";

console.log(o1 === o2); //얕은 비교
console.log(o1 === o3); //->참조값으로 비교

console.log(JSON.stringify(o1) === JSON.stringify(o2)); //깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o3)); //객체를 문자열화해서 비교
