//1.Date 객체 생성

let date1 = new Date(); //생성자
console.log(date1);
let date2 = new Date("1994-01-01/10:10:04");
console.log(date2);

//2. 타임스탬프
//특정 시간이 1970.01.01.00시 00분 00초 부터
//몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);
let date3 = new Date(ts1);

console.log(date3);

//3. 시간 요소 추출
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month + 1, date, hour, minute, seconds);

//4. 시간 수정

date1.setFullYear(2023);
date1.setMonth(2);
console.log(date1);

//5. 시간을 여러 포맷으로 출력

console.log(date1.toDateString()); //시간 빼고
console.log(date1.toLocaleString()); //현지화
