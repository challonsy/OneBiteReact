//익명함수와 화살표 함수

function funcA() {
  console.log("funcA");
}

let varA = funcA;

varA();

let varB = function () {
  //익명함수
  console.log("funcB");
};

varB();

//화살표 함수

let varC = (value) => value + 1;

console.log(varC(10));
