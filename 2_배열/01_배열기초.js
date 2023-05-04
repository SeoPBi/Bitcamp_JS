var a = 10;
var b = a;

a = 15;
// 기본형 변수는 변수 복사시 개별적으로  작동합니다.
console.log(`a:${a}, b:${b}`)

var arr1 = [1,2,3,4];
var arr2 = arr1;
arr1[1] = 999;
arr2[0] = 777;

console.log(`arr1:${arr1}, arr2:${arr2}`);
console.info("------------------------");
// 배열의 생성
// 배열ㅇ 변수 이름 관례 : 복수형, list접두어
var fruits = ['망고', '망고스틴', '포도'];
var notlist = { // 중괄호는 배열이 아닌 객체입니다.
    0:'딸기',
    1:'바나나',
    2:'사과'
};
console.log(`fruit의 자료형 : ${typeof fruits}, notlist의 자료형 : ${typeof notlist}`);

// 자료 개수 확인
console.log(`fruits의 자료 개수 : ${fruits.length}`);

// 배열 데이터 참조
console.log(`fruits의 첫 데이터 : ${fruits[0]}`);
console.log(`fruits의 마지막 데이터 : ${fruits[fruits.length - 1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';
console.log(`변경 후 : ${fruits}`);

// 수정 시 주의사항 : 자바스키릅트는 꼭 0번부터 모든 자료를
// 채우지 않아도 되고, 뒤쪽 인덱스를 지목해도 자료가 대입됩니다.
// fruits[4] = '복숭아';
// console.log(fruits);

// 배열 내부데이터 전체 조회하기
// index로 조회
for(var i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 향상된 for문 형식 조회
for(var i of fruits) {
    console.log(i);
}