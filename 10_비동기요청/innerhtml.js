// 태그의 innerHTML은 문자를 대입받으면 전부 태그로 바꿔서 적용합니다
// 특정 태그 내부 요소를 추가하거나 교체하는 법은
// 태그변수.innerHTML = "추가할 내용"
// 을 수행하면 됩니다
let str = ""; // 빈 문자 선언

const addTag = () => {
    str += "<h1>새로운 내용</h1>"; // h1태그 관련 텍스트 생성
    const $container = document.getElementById("container");
    // console.log($container.innerHTML); // 기존 내용 확인 (기존내용 살리려면 createElement, appendChild 사용해야함)
    $container.innerHTML = str; // div#container 사이에 str 추가
}

const $oneTimeBtn = document.getElementById("oneTimeBtn");
$oneTimeBtn.addEventListener("click", addTag); // 클릭 시 addTag 호출하는 이벤트 추가