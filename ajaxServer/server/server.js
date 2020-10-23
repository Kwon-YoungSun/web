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
		response.end('<h1>Welcome Node.js Study Page!!!</h1>');
	} else if(pathname == '/idCheck.ck'){
		// get 방식 처리
		// let과 var의 차이 : var은 자동 초기화가 된다.
		var query = url.parse(request.url, true).query;
		var sid = query.id;
		
		var result = dataJson[sid];
		var sdata = 'NO';
		if(!result){
			sdata = 'YES';
		}
		// 응답한다.
		response.writeHead(200, {'Content-Type':'text/json'});
//		response.writeHead(200, {'Content-Type':'text/plain'});
		response.end('{"result": "' + sdata + '"}');
//		response.end(sdata);
		
		// post 방식 처리
		request.on('data', function(data){
			var jdata = paramPars(data.toString());
			// 파라미터로 넘어온 데이터 꺼내고
			var tid = jdata.id
			
			var sendData = dataJson[tid];
			
			result = 'NO';
			
			if(!sendData){
				result = 'YES';
			}
			
			response.writeHead(200, {'Content-Type':'text/json'});
			response.end('{"result": "' + sdata + '"}');
		});
	}
}).listen(8080, function(){
	console.log('***** Server Start *****');
});