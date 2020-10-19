var arr = [];

for(var i = 0; i < 100; i++){
	arr[i] = i + 1;
}

// 배열 출력
for(var i = 0; i < 100; i++){
	document.write(arr[i] + ', ');
	if((i+1) % 10 == 0){
		document.write('<br>');
	}
}

// 홀수번째 데이터 수정
for(var i = 0; i < 100; i++){
	if(i % 2 != 0){
		continue;
	}
	arr[i] = 0;
}
document.write('<p></p>');

for(var i = 0; i < 100; i++){
	document.write(arr[i] + ', ');
	if((i+1) % 10 == 0){
		document.write('<br>');
	}
}

document.write('<hr>');

var arr = ['이지우', '장성환', '오혜찬'];

var str = arr.join();
var str2 = arr.join('-');
var str3 = arr.join(' 그리고 ');

document.write('str : ' + str + '<br>');
document.write('str2 : ' + str2 + '<br>');
document.write('str3 : ' + str3 + '<br>');

document.write('<br>');

var stud = ['윤요셉', '유병욱'];
arr = arr.concat(stud);
document.write('concat : ' + arr.join('-'));

document.write('<br>');

document.write('concat : ' + arr.concat('박진우','김영선').join('-'));
/*-------------------------------------------------------------------*/
document.write('<br>');
document.write('### 배열 정렬 하기 ###');
document.write('<br>');
arr = arr.concat('박진우', '김영선');
arr.sort();
document.write('sort : ' + arr.join('-'));
document.write('<br>');
document.write('reverse : ' + arr.reverse('-'));










