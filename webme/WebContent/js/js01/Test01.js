var msg = '외부 스크립트 적용 첫번째!!!';

document.write('<div class="w3-content w3-center">' + 
					'<h1 class="w3-blue w3-padding w3-card-4 w3-round-large">' + 
						msg +
					'</h1>' + 
				'</div>'
);

var func01 = function() {
	alert('abcd');
}
