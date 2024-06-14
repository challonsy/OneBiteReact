//조건문

let num = 10;

if (num >= 10) {
  console.log(num);
} else {
  console.log("조건이 거짓입니다.");
}

//2. Switch 문

let animal = "cat";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "horse": {
    console.log("말");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  default: {
    console.log("저는 그런 동물 몰라요");
  }
}
