// 자바스크립트의 함수는 함수를 리턴할 수 있음.
function calculator(n1, n2) {

    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5,6);
console.log(closure);
console.log(typeof closure);

const n = closure();
console.log(`closure()의 결과 : ${n}`);

console.log('--------------------------------');

// 즉시 실행 함수
// 함수를 선언하고, 선언부 뒤에 (); 를 추가로 붙이면 그 함수는
// 선언과 동시에 실행까지 됩니다. 
// 일회성으로 호출 할 함수를 만들때 많이 사용합니다.
(() => {
    console.log("즉시실행 구문이 붙었군요!");
})();

// const start = (() => {
//     console.log("즉시실행 구문이 붙었군요!");
// })();

// // 리턴 자료가 없었기 때문에, start 변수에 저장 받은 자료가 없음
// start();