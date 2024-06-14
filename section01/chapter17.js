//배열
let arr1 = new Array();
let arr2 = [];
let arr3 = [1, 2, 3, true, "hello", undefined, () => {}, {}, []];

//배열의 요소 접근
let item1 = arr3[0];
arr3[0] = "hellooo";
console.log(item1, arr3[0]);
