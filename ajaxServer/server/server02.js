var http = require('http');
var url = require('url');

// 필요한 데이터 변수
var dataJson = {
		'euns': '12345',
		'jiwoo': '12345',
		'hwan': '12345',
		'chan': '12345',
		'wook': '12345',
		'joseph': '12345'
};

/*
	데이터베이스의 질의명령으로 처리하는 경우는
		로그인 : SELECT COUNT(*) cnt FROM member WHERE id=? AND pw=?;
		회원가입 아이디 확인 :
			
			SELECT COUNT(*) cnt FROM member WHERE id=?;
 */

/*var result = dataJson['jinwoo'];
var result1 = dataJson['chan'];

var sdata = 'NO';

if(!result) {
	sdata = 'YES';
}

var result = {
		'result': sdata
}

console.log(sdata);*/

// 서버 생성
http.createServer(function(request, response){
	// 변수 선언
	var pathname = url.parse(request.url).pathname;
	
	// 페이지 구분
	// http://localhost:8080/
	if(pathname == '/'){
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end('<h1>Welcome Node.js Login Page!!!</h1>');
	} else if(pathname == '/login.cls'){
		// get 방식 처리
		
		// post 방식 처리
		request.on('data', function(data){
			var jdata = paramPars(data.toString());
			
			// 파라미터로 넘어온 데이터 꺼내고
			var tid = jdata.id;
			var tpw = jdata.pw;
			
			var sendData = dataJson[tid];
			
			var result = 'NO';
			
			if(tid && (dataJson[tid] == tpw)){
				result = 'YES';
			}
			
			response.writeHead(200, {'Content-Type':'text/json'});
			response.end('{"result": "' + result + '"}');
		});
	}
}).listen(8080, function(){
	console.log('***** Server Start *****');
});

function paramPars(d){
	var tmp = d.split('&'); // id=?????&pw=???? ---> ['id=?????', 'pw=?????']
	var arr = {};
	for(var i = 0; i < tmp.length; i++){
		
		let idx = tmp[i].indexOf('=');
		let key = tmp[i].substring(0, idx);
		let val = tmp[i].substring(idx + 1);
		
		arr[key] = val;
		
/*		tmp[i] = tmp[i].split('=');
		arr[tmp[i][0]] = tmp[i][1];*/
	}
	
	return arr;
}