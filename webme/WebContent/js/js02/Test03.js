// 칼라 클래스 변수
var color = [
	'w3-red', // 0
	'w3-pink', // 1
	'w3-purple', // 2
	'w3-deep-purple', // 3 
	'w3-indigo', //4
	'w3-blue', // 5
	'w3-aqua', // 6
	'w3-teal' // 7
];

document.write('<div class="w3-content w3-padding w3-center" style="max-width: 800px;">');
document.write('	<h1 class="w3-deep-orange w3-padding">구 구 단</h1>');
document.write('	<div class="w3-col">');
for(var k = 0 ; k < 8 ; k++){
document.write('		<div class="w3-quarter w3-padding">');
document.write('			<div class="w3-col w3-padding ' + color[k] + ' w3-border txt"><span id="'+ (k+2) + 'dan">'+ (k+2) + '</span> 단</div>');
document.write('			<div class="w3-col w3-padding w3-border">');

for(var i = 0 ; i < 9 ; i++ ){
	var result = (k+2) + ' X ' + (i+1) + ' = ' + ((k+2)*(i+1))
	document.write('				<div class="w3-col" id="' + (k+2)+ (i+1)+'gap">' + result +'</div>');
	/*
		21gap
		22gap
		23gap
	*/

}
document.write('			</div>');
document.write('		</div>');
}

document.write('	</div>');
document.write('</div>');

/*-------------------------------------------------------------------------------*/

/* 위의 스크립트에서 만든 문서에 데이터를 채우는 스크립트를 작성하세요! */
/*for(var i = 0; i < 8 ; i++ ){
	var dan = i + 2;
	
	document.getElementById(dan + 'dan').innerHTML = dan;
	
	for(var j = 0; j < 9; j++ ){
		var gop = j + 1;
		document.getElementById('' + dan + gop + 'gap').textContent = dan + ' x ' + gop + ' = ' + (dan * gop);
	}
}*/
