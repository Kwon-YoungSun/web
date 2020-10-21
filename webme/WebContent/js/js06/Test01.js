var data = {
	name: '이지우',
	age: 26,
	gen: 'M',
	score: [85, 85, 95]
};

// alert(data['score']);

/*
	학습방법 ]
		
		자바스크립트의 연관배열 만드는 형식
		자바스크립트의 객체 만드는 형식
		json 데이터 만드는 형식
		구분해서 기억해두면 된다.
*/

/*window.setTimeout(function(){
	alert("나 실행됩니다.");
}, 2000);*/

var intv = window.setInterval(function(){
	document.write('<h1>여기는 h1 태그</h1>');
}, 1000);

function clint(){
	clearInterval(intv);
};

setTimeout(clint, 5000);


// window.setInterval('function(){document.write("<h1>여기는 h1 태그</h1>");}', 1000);

// window.open('../js05/Sample.html?name=이지우&age=26&gen=남자&mail=jiwoo@increpas.com', '이지우님 정보', 'toolbar= yes; width= 400px; height: 400px;');

/*var sname = window.prompt('이름 입력 : ');
alert('이름 : ' + sname);

var conf = confirm('이름이 ' + sname + ' 맞습니까?');

document.write('<h1>'+ sname + ' : ' + conf + '</h1>');
*/


/*var win1 = open('../js05/Sample.html', 'win1', '');

function resizeWin(){
	alert('창사이즈 수정');
	
	win1.resizeTo(500, 500);
}

setTimeout(resizeWin, 2000);*/









