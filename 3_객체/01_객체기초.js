// 객체 리터럴(값)
var cat = {
    // 프로퍼티 작성
    name : '룰루',
    age : 3,
    hobbies : ['낚시놀이', '간식먹기', '잠자기'],
    kind : '스코티시폴드', // 마지막 요소에도 ,를 붙여주시는게 좋습니다.
};

var watermonitor = {
    name : '뚜뚜',
    age : 5,
    hobbies : ['산책하기', '수영하기'],
    kind : '물왕도마뱀',
};

console.log(`객체1 타입 : ${typeof cat}, 객체2 타입 : ${typeof watermonitor}`);

// 저장된 데이터 참조하기
console.log(cat.name);
console.log(watermonitor);
console.log(watermonitor.hobbies);

console.log(cat.hobbies[1]);

console.log(cat.hobbies.push("꾹꾹이 하기"));
console.log(cat.hobbies);

// 프로퍼티값 수정하기
cat.age = 1;
console.log(cat['age']); // 객체명['키값] 으로도 조회 가능

// 없던 프로퍼티(키, 벨류값 쌍) 추가하기
cat.owner = '신현섭';
watermonitor.owner = '이상민';
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log("-------------------------------");

// 프로퍼티의 유무 확인
// key값을 반드시 문자열로 제시해야함
var ageFlag = 'age' in cat; // cat 객체 내부에 age 키 값이 존재하는지?
console.log(ageFlag);

//master라는 프로퍼티가 없을때 추가하도록 처리
if(!('master' in cat)) {
    cat['master'] = '룰루주인';
}

console.log(cat);

console.log("===============================");
// 객체를 순회하는 반복문
// key를 반복해서 출력해줌
for(var k in watermonitor) {
    console.log(`watermonitor의 키 값 : ${k}, 매칭된 벨류값 : ${watermonitor[k]}`);
}

// 객체의 중첩
var items = {
    store : '착한가게',
    productList : [
        {
            name : '초코과자',
            price : 3000, 
            count : 12,
        },
        {
            name : '딸기잼쿠키',
            price : 1500,
            count : 20,
        },
        {
            name : '감자칩',
            price : 2500,
            count : 5,
        },
    ]
}

console.log("------------------------------");
console.log(items);
console.log("------------------------------");
console.log(items.productList[0].name);
