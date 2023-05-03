var n1 = 10;
var n2 = 20;

console.log(`n1 + n1`); // 정수 + 문자 = 문자

var n3 = n1 + '';
console.log(`더하기 전 : ${typeof n1}, 더한 후 : ${typeof n3}`);

var n4 = '100' * 55;
console.log(`문자 100 * 정수 55 : ${n4}`);

var n5 = +'99'; // 단항 연산자로 사용한 +도 정수화 시킴
console.log(`단항 연산자가 적용된 문자 : ${typeof n5}`)

console.log("----------------------------------");
// js에서는 0, '', null, undefined, NaN은 거짓입니다.

// falsy
if(undefined) console.log('undefined!')
if(null) console.log('null!');
if(0) console.log('0!');
if("") console.log('""!');
if(NaN) console.log('NaN!');

//truthy
if(1) console.log('0이 아닌 숫자!');
if(-100.234) console.log('음수도 0만 아니면!');
if('     ') console.log('공백문자도!');
if('hello!!!') console.log('일반문자!');
if([]) console.log('파이썬과는 달리 빈리스트도 가능!')