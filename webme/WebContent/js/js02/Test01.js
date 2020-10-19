var sno = '10';
var str= '';

if(sno === 10){
	str = '10입니다.';
} else {
	str = '10이 아닙니다.';
}

// document.write(str);

//var msg = document.getElementById('h3_01').innerHTML;
// document.getElementById('h3_01').innerHTML = msg + str;
document.getElementById('msg').innerHTML = str;