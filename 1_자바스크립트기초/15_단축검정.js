// OR 연산 : 첫 번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕'); // 첫 번째가 falsy이므로 두 번째 반환

// AND 연산 : 첫 번째 falsy를 반환
console.error('Hello' && 'World');
console.error(null && '메롱');