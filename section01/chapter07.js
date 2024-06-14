//1.대입 연산자
let var1 = 1;

//2.산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

//3. 복합 대입 연산자
let num6 = 10;
num6 += 20;
let num7 = 10;

//4. 증감 연산자
num7++; //num7=11

console.log(num7++); //11 출력 후 +1

//5. 논리 연산자

let or = true || false;
let and = true && false;
let not = !true;

console.log(or, not, and);

//6. 비교 연산자
let comp1 = 1 === "1";
let comp2 = 1 == "1";

console.log(comp1, comp2);
