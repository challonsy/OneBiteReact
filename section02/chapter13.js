function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //Executer
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);

//then->promise 성공 후

p.then((value) => {
  console.log(value);
  return add10(value);
})
  .then((value) => {
    console.log(value);
    return add10(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

//catch -> promise 실패 후

let newP = p.then((val) => {
  const newP = add10(val);
  return newP;
});
setTimeout(() => {
  console.log(newP);
}, 5000);
