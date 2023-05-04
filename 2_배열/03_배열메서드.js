var foodList = ['라멘', '해장국', '돈카츠', '보쌈정식'];

var count = 0;

var target = '라멘';

// indexOf : 배열의 특정 데이터가 몇 번 인덱스에 있는지 탐색
var index = foodList.indexOf(target);

console.log(`찾은 인덱스 : ${index}`);

// slice() : 배열을 일정 부분 잘라냄. 사본 배열 반환.
foodList.push('순대국밥', '우육면');

console.log(foodList);

// 인덱스 1부터 4미만까지 추출
var sliceFoods = foodList.slice(1, 4);
console.log(`잘린음식 : ${sliceFoods}, 원본음식 : ${foodList}`);

// 끝 인덱스를 안 적었으면, 시작번호부터 끝까지 전부 복사
sliceFoods = foodList.slice(2); // 끝번호 명시 안함
console.log(`잘린음식 : ${sliceFoods}, 원본음식 : ${foodList}`);

// 원본배열 그대로 "깊은"복사
slicedFood = foodList.slice();
sliceFoods[0] = '라멘2';
console.log(`복사본 : ${sliceFoods}, 원본음식 : ${foodList}`);

// reverse는 인덱스번호 기준으로 역순 나열합니다.
console.log("--------------------------------");
var nums = [10, 20, 30, 40, 50];
var copyNums = nums.slice();
copyNums.reverse();
console.log(`원본 : ${nums}, 복사본 : ${copyNums}`);

// concat() : 배열 2개를 연결(배열 1길이 + 배열 2길이 = 결과리스트길이)
console.log("================================");
var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);
console.log(`합쳐진 배열 : ${concatedArr}`);

// includes() : 배열에 특정 데이터가 존재하는지 확인
console.log("--------------------------------");
var resultFlag = foodList.includes("피자");
console.log(`피자의 포함여부 : ${resultFlag}`);

// splice() : 배열의 특정 요소를 제거, 삽입하기
console.log("================================");
console.log(foodList);

// 원본에 반영
foodList.splice(1,2);
console.log(foodList);

foodList.splice(0, 1, "보쌈");
console.log(foodList);

// 삭제되는 데이터 없이 집어넣고 싶은 경우(번호, 0, "넣을자료");
foodList.splice(1, 0, "스파게티");
console.log(foodList);

foodList.splice(2, 0, "도삭면", "삼겹살");
console.log(foodList);

// 특정 번호 이후 다 지우기
foodList.splice(2);
console.log(foodList);

// join()은 특정 문자열을 인덱스번호 사이에 넣어서 연결합니다.
foodList = ['피자', '치킨', '탕수육' , '초밥'];
console.log(foodList.join("///"));