/*
	회원번호 : 1000
	아 이 디 : hong
	회원이름 : 홍길동
	생년월일 : 2020년 10월 19일
	회원성별 : 남자
*/
/*var head = ['mno', 'mid', 'mname', 'mbirth', 'gen'];*/
var head = new Array('mno', 'mid', 'mname', 'mbirth', 'gen');
var data = [1000, 'hong', '홍길동', '2020년 10월 19일', '남자'];

function abc() {
	/*
	document.getElementById('mno').innerText = 1000;
	document.getElementById('mid').innerText = 'hong';
	document.getElementById('mname').innerText = '홍길동';
	document.getElementById('mbirth').innerText = '2020년 10월 19일';
	document.getElementById('gen').innerText = '남자';
	*/
	for(var i = 0; i < head.length; i++) {
		document.getElementById(head[i]).innerHTML = data[i];
	}
}