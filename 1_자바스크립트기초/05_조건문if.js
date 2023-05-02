// 난수발생은 JS에서도 Math.random()으로 가능하다.
// Math.floor(자료)는 내림처리한다.
var age = Math.floor((Math.random() * 100));
console.log(`당신의 나이는 ${age}세 입니다.`)

if(age > 19) {
    console.log("성인입니다. 주류 구매가 가능합니다.");
} else if(age >= 17) {
    console.log("고딩입니다.");
} else if(age >= 14) {
    console.log("중딩입니다.");
} else if(age >= 8) {
    console.log("초딩입니다.");
} else {
    console.log("미취학 아동입니다.");
}
 