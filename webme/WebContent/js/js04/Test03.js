var kdata = [
	'서울', '부산', '대구', '대전', '인천', '광주', '제주', '울산', '세종'
];

kdata.sort();
// 마지막 인덱스는 포함시키지 않는다.
// 음수 인덱스는 오른쪽부터 거꾸로 센다.
var str1 = kdata.slice(0, 4);
var str2 = kdata.slice(2, -1);
var str3 = kdata.slice(-4, -2);

document.write('전체배열 : ' + kdata + '<br>');
document.write('부분배열1 : ' + str1 + '<br>');
document.write('부분배열1 : ' + str2 + '<br>');
document.write('부분배열1 : ' + str3 + '<br>');
document.write('전체배열 : ' + kdata + '<br>');
document.write('<hr>');

var str1 = kdata.splice(1, 2);
document.write('삭제데이터 : ' + str1 + '<br>');
document.write('kdata 배열 : ' + kdata + '<br>');
var str2 = kdata.splice(1, 2, '강릉', '수원');
document.write('삭제데이터2 : ' + str2 + '<br>');
document.write('kdata 배열 : ' + kdata + '<br>');
var str3 = kdata.splice(2, Number.MAX_VALUE);
document.write('삭제데이터3 : ' + str3 + '<br>');
document.write('kdata 배열 : ' + kdata + '<br>');
document.write('<hr>');

/*------------------------------------------------*/

var kdata = [
	'서울', '부산', '대구', '대전', '인천'
];

var len = kdata.push('광주', '제주');
document.write('배열  길이 : ' + len + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');

var str = kdata.pop();
document.write('삭제데이터 : ' + str + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');
document.write('<hr>');

var kdata = ['서울', '부산'];
var len = kdata.unshift('대구', '대전'); // 첫번째 인덱스에 데이터를 추가해주는 함수
document.write('배열  길이 : ' + len + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');

var str = kdata.shift();
document.write('삭제데이터 : ' + str + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');


