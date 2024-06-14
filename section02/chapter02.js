//단락평가
//->첫번째 피연산자 값만으로 논리연산의 결과가 확정나는 경우 두번째 피연산자에 접근 X

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 123;
}

console.log(returnTrue() && returnFalse());

//return 값이 트루시, 펄시한 값일 경우 논리연산의 결과값도 리턴값으로 나옴
//예를 들어 returnFalse 리턴값이 undefined 인 경우 두 함수의 앤드 연산 결과값은 undefined.
