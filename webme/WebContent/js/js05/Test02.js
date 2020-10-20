function func01(){
	var sname = document.getElementById('tname').innerText;
	var sage = document.getElementById('tage').innerText;
	var stel = document.getElementById('ttel').innerText;
	var smail = document.getElementById('tmail').innerText;
	var sgen = document.getElementById('tgen').innerText;
	
	// 방법1. location
	document.getElementById('btn2').onclick = function() {
		location.href = './Sample.html?name='+sname+'&age='+sage+'&tel='+stel+'&mail='+smail+'&sgen='+sgen;	
	}
	
	// 방법2. form tag
	document.getElementById('btn1').onclick = function() {
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('tel').value = stel;
		document.getElementById('mail').value = smail;
		document.getElementById('gen').value = sgen;
		
		document.getElementById('frm1').submit();
	}
}