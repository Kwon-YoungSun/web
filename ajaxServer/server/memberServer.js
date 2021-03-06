var http = require('http');		// http 소스코드를 사용하기 위해서 소스코드를 변수에 담아놓고 사용한다.
var url = require('url');
var fs = require('fs');

// 왜 큰따옴표로 감싸는가? : 에러가 날 수 있다.
var userData = {
	"1000": {
		"mno": "1000",
		"name": "전은석",
		"id": "euns",
		"tel": "010-3175-9042",
		"mail": "euns@increpas.com",
		"gen": "남자"
	},
	"1001": {
		"mno": "1001",
		"name": "이지우",
		"id": "jiwoo",
		"tel": "010-1111-1111",
		"mail": "jiwoo@increpas.com",
		"gen": "남자"
	},
	"1002": {
		"mno": "1002",
		"name": "장성환",
		"id": "hwan",
		"tel": "010-2222-2222",
		"mail": "hwan@increpas.com",
		"gen": "남자"
	},
	"1003": {
		"mno": "1003",
		"name": "오혜찬",
		"id": "chan",
		"tel": "010-3333-3333",
		"mail": "chan@increpas.com",
		"gen": "남자"
	},
	"1004": {
		"mno": "1004",
		"name": "윤요셉",
		"id": "joseph",
		"tel": "010-1004-1004",
		"mail": "joseph@increpas.com",
		"gen": "남자"
	}
};

http.createServer(function(request, response){
	// parse: 필요한 것들만 적당히 잘라서 씀.
	var pathname = url.parse(request.url).pathname;
	
	if(pathname == '/css/w3.css'){
		var src = fs.readFileSync('../css/w3.css', 'UTF-8');
		response.writeHead(200, {'Content-Type':'text/css'});
		response.end(src);
	}
	if(pathname == '/css/cls.css'){
		var src = fs.readFileSync('../css/cls.css', 'UTF-8');
		response.writeHead(200, {'Content-Type':'text/css'});
		response.end(src);
	}
	if(pathname == '/js/jquery-3.5.1.min.js'){
		var src = fs.readFileSync('../js/jquery-3.5.1.min.js', 'UTF-8');
		response.writeHead(200, {'Content-Type':'text/javascript'});
		response.end(src);
	}
	if(pathname == '/js/memberInfo.js'){
		var src = fs.readFileSync('../js/memberInfo.js', 'UTF-8');
		response.writeHead(200, {'Content-Type':'text/javascript'});
		response.end(src);
	}
	
	
	if(pathname == '/'){
		
	}
	if(pathname == '/memberInfo.cls'){
		var str = fs.readFileSync('../view/main.html', 'UTF-8');
		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.end(str);
	}
	if(pathname == '/memberList.cls'){
		// 할 일
		// 회원번호와 회원이름을 뽑아서 json 형태 만들어준다.
		var kdata = Object.keys(userData); // 키값만 뽑고
		var data = {};
		// { 회원번호: {"mno": 회원번호, "name": 회원이름}, 회원번호: {"mno": 회원번호, "name": 회원이름}... }
		// { 회원번호: 회원이름, 회원번호: 회원이름, ... }
		for(var i = 0; i < kdata.length; i++){
			data[kdata[i]] = userData[kdata[i]].name;
		}
		
		response.writeHead(200, {'Content-Type': 'text/json'}); // json 데이터를 문자열 형태로 변환
		response.end(JSON.stringify(data));
		/*
			json 객체를 문자열로 변환 : JSON.stringify(제이슨객체);
			json 형태의 문자열을 json으로 변환 : JSON.parse(문자열);
		*/
	}
	
	if(pathname == '/memberDetail.cls'){
		request.on('data', function(data){
			var pdata = paramPars(data.toString());
			var kstr = pdata.mno;
			
			var obj = userData[kstr];
			
			response.writeHead(200, {'Content-Type': 'text/json'});
			response.end(JSON.stringify(obj));
		});
	}
}).listen(8080, function(){
	console.log('*** 서버 기동 ***');
});

function paramPars(d){
	var tmp = d.split('&'); // id=?????&pw=???? ---> ['id=?????', 'pw=?????']
	var arr = {};
	for(var i = 0; i < tmp.length; i++){
		/*
		let idx = tmp[i].indexOf('=');
		let key = tmp[i].substring(0, idx);
		let val = tmp[i].substring(idx + 1);
		
		arr[key] = val;
		*/
		tmp[i] = tmp[i].split('=');
		arr[tmp[i][0]] = tmp[i][1];
	}
	
	return arr;
}





