//async
//함수를 비동기 함수로 만들어준다=>함수가 promise 반환하게됨

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이민용",
        id: "Brad Pitt",
      });
    }, 2000);
  });
}

console.log(getData());

//await: async 함수 내에서만 사용가능
//비동기함수가 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();//promise 가 종료된 후 결과값 넣어줌
  console.log(data);
}

printData();
