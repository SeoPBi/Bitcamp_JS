var n = 1;
while(true) {
    console.log(n++);
    if(n === 10)break; // 타겟 실행문이 1줄이면 중괄호 생략 가능

}
console.log(`${n}\n무한루프인데 끝났습니다 `);