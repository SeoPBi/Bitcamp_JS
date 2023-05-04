// 1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';

// var를 대신하는 es6의 let
let x = 10;
// let x = '김철수';

console.log(`x : ${x}`); // 일단 선언된 이후로는 활용은 같습니다.


// 2. 블록레벨 스코프 지원 x
// var i = '안녕';
let i = '안녕';

// for(var i = 0; i < 3; i++) {
for(let i = 0; i < 3; i++){
    console.log(`for문 도는 도중 i : ${i}`);
}
console.log(`for문 끝나고 i : ${i}`);


// 3. 변수 호이스팅 : 선언문만 맨 위에 있는 것으로 취급하는것
z = 100;

console.log(z);

// var z;
// let z;
