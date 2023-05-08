const userNames = ['김철수', '강감찬', '박영희'];

// 구조분해할당에 의한 분할저장
const [kim, kang, park] = userNames; 

console.log(`kim : ${kim}, kang : ${kang}, park : ${park}`);

console.log('--------------------------------------');

// 변수 값 교환하기
let first = 10;
let second = 20;

console.log(`교환 전 : first: ${first}, second: ${second}`);
[second, first] = [first, second];
console.log(`교환 후 : frist : ${first}, second: ${second}`);


console.log('--------------------------------------');

// 앞 2개는 변수에 각각 넣고, 나머지는 배열로 빼기
const numbers = [1,3,5,7,9,11];
const [one, three, ...others] = numbers;

console.log(`one : ${one}, three : ${three}, 나머지 : ${others}`);

console.log('--------------------------------------');

// 스프레드를 이용한 배열 확장
const foods = ['돈까스', '감자탕', '내장탕', '보쌈'];

const newFoods = [foods,'초밥', '햄버거'];
console.log(`추가 확인 : ${newFoods}`);
// 일반 확장을 하려고 하는 경우, 
// 첫째로 이중배열 처리가 되고, 두번째는 얕은 복사가 일어나는 문제가 있습니다.
foods[0] = '크로켓';
console.log(`foods : ${foods}, newFoods : ${newFoods}`);

// 깊은복사를 이용해 배열 확장 및 깊은복사 처리가 가능합니다.
// 배열 복사가 다음과 같이 됨
// [['크로켓', '감자탕', '내장탕', '보쌈'], '초밥', '햄버거']
const advFoods = [...foods, '초밥', '햄버거']
console.log(`advFoods의 이중배열 여부 : ${advFoods[0]}`);

foods[1] = '치킨마요덮밥';
// 스프레드 문법이 적용된 복사는 깊은 복사입니다.
console.log(`foods : ${foods}`);