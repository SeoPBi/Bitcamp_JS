// fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받아올 수 있습니다.
/*
async function loadMovieList(){
    // fetch의 첫 번째 파라미터는 요청 주소입니다.
    const response = await 
        fetch("	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505"); //GET
    // 요청의 결과로 받은 response객체의 body에 담긴 json만 추출해줍니다.
    const jsonData = await response.json(); // 응답 받은 response의 json
    console.log(jsonData);
}
*/
function loadMovieList(){ // fetch().then() 사용시 자동으로 대기처리
    fetch("	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505")
    .then((response) => response.json()) // fetch 의 응답결과가 response의 파라미터로 자동으로 들어가고 다시 json만 추출한 것을 리턴 
        //(화살표 함수로 리턴구문 생략)
    .then((result) => console.log(result)); // response.json() 이 result의 파라미터로 들어가고 그것을 log에 찍음
}