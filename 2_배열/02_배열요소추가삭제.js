var pets = ['멍멍이', '야옹이', '룰루'];

console.log(`pets : ${pets}`);

// pets[3] = '어완자';
pets.push('어완자');
pets.push('땡칠이');

pets.push(`\npets : ${pets}`);

var newLength = pets.push('콩콩이', '징징이');
console.log(`pets : ${pets}, 2개 넣으면? : ${newLength}`);

//마지막 데이터 삭제
var deletedData = pets.pop();
console.log(`pets : ${pets}, 삭제된 데이터: ${deletedData}`);

//첫번째 데이터 삭제
deletedData = pets.shift();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`);

//unshift로 배열 첫 번째에 데이터 추가히기
newLength = pets.unshift('으랑이', '이썬이');
console.log(`pets : ${pets}, 추가 후 길이 : ${newLength}`);