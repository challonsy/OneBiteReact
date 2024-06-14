//1.null 병합 연산자
//-> 존재하는 값을 추려내는 기능
//->null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var3 ?? var2;

console.log(var4, var5);

//2. typeof 연산자
//->값의 타입을 문자열로 반환

let t1 = typeof var2;
