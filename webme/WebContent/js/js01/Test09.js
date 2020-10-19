// 구구단 5단 출력
/*
for(var i = 1; i <= 9; i++){
	document.write('5 X ' + i + '= ' + 5 * i + '<br>');
}
*/

var colors = ['w3-red', 'w3-deep-orange', 'w3-yellow', 'w3-green', 'w3-teal', 'w3-blue', 'w3-indigo', 'w3-purple', 'w3-pink']
// 구구단 출력
for(var i = 2; i <= 9; i++) {
	var result = '';
	document.write('');
	for(var j = 1; j <= 9; j++) {
		result += (i + ' X ' + j + '= ' + i * j + '<br>');
	}
	document.write('<div class="w3-margin w3-round w3-content w3-center w3-card-2" style="width: 200px; display: inline-block;">' + 
					 '<div style="width: 200px; display: inline-block;">' + 
						'<h3 class="' + colors[i-2] + '" style="margin: 0">' + 
							i + '단' + 
						'</h3>' + 
					 '</div>'+
					 '<div class= "w3-padding">' + 
						    result + 
					 '</div>' +
					'</div>');
}