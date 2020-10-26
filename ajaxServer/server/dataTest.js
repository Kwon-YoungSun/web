var fs = require('fs');

// 파일 읽어서 문자 데이터로 기억
var sdata = fs.readFileSync('../js/memberData.js', 'UTF-8'); 

console.log(sdata);

// 문자열데이터를 json 형태로 변환
var data = JSON.parse(sdata);

console.log('이지우 : ' + data['1001'].mail);