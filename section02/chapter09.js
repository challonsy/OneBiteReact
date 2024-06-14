//배열 변형 메서드
//1.filter: 조건 만족 요소만 걸러서 새 배열로 반환

let arr = [
  { sirname: "이", name: "민용", job: "체육선생" },
  { sirname: "김", name: "범", job: "학생" },
  { sirname: "이", name: "순재", job: "한의사" },
];

const leeFamily = arr.filter((item) => {
  if (item.sirname === "이") return true;
});

console.log(leeFamily);

//2.map: 현재 배열에 콜백함수 적용한 새 배열 반환
let arr2 = [5, 4, 3, 2, 1];
const mapResult = arr2.map((item) => {
  return item * 2;
});

console.log(mapResult);

let highKickFamily = arr.map((item) => item.sirname + item.name);
let highKickFamily2 = [...highKickFamily];
console.log(highKickFamily);

//3. sort: 사전순 정리
highKickFamily.sort();
console.log(highKickFamily);

arr2.sort((a, b) => {
  //숫자 오름차순 정렬
  if (a > b) {
    return 1; //더 작은 값이 앞에 오게 된다
  } else if (a < b) {
    return -1; //더 큰 값이 앞에 오게 된다
  } else {
    return 0; //자리를 바꾸지 않는다
  }
});

console.log(arr2);

//4. toSorted: 원본 배열 냅두고 새로 정렬한 배열 반환
sortedHighkickFamily = highKickFamily2.toSorted();
console.log(sortedHighkickFamily, highKickFamily2);

//5.join: 배열 모든 요소를 하나의 문자열로
const joined = highKickFamily.join("! ");
console.log(joined);
