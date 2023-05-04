/*
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고
   약수의 개수를 리턴하는 함수 caluDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
*/

function calcDiviosr(n) {
    var divisor = [];
        for(var i = 1; i <= n; i++) {
            if(n % i === 0);{
            divisor.push(i);
            }
    }
    console.log(`${n}의 약수 : ${divisor}`);
    return divisor.length;
}

console.log(calcDiviosr(20))