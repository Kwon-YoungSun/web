var func01 = function() {
	alert('btn1 버튼 클릭!');
}

// document.getElementById('btn1').onclick = func01;
// 주의! func01()라고 적으면 안됨. 함수의 실행결과값을 저장한다는 구문이 되어버림.
document.getElementById('btn1').onclick = function(){
	alert('btn1 버튼 클릭!');
};

// 입력태그의 값은 value로 읽는다.
// innerHTML, innerTest, value 구분하자!!!
document.getElementById('btn2').onclick = function(){
	var sfile = document.getElementById('file').value;
	alert('선택된 파일 : ' + sfile);
};
/*
var btn3 = document.getElementById('btn3');
btn3.onclick = function() {
	var sid = document.getElementById('id').value;
	alert('입력된 아이디 : ' + sid);
}
*/

// btn3의 버튼 이름을 입력된 아이디 값으로 변경해보자.
// 위 코드를 수정해서 아이디 입력창에 입력된 내용으로 버튼이름을 변경하세요.
var btn3 = document.getElementById('btn3');
btn3.onclick = function() {
	var sid = document.getElementById('id').value;
	btn3.innerHTML = sid;
	alert('입력된 아이디 : ' + sid);
}