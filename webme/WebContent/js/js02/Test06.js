document.getElementById('resetB').onclick = function(){
	document.getElementById('id').value = '';
	document.getElementById('pw').value = '';
	document.getElementById('name').value = '';
	
	//document.getElementById('hidepanel').style.display = 'none';
	document.getElementById('hidepanel').classList.add('w3-hide');
};

document.getElementById('readB').onclick = function(){
	
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var sname = document.getElementById('name').value;
	
	document.getElementById('rid').innerHTML = sid;
	document.getElementById('rpw').innerHTML = spw;
	document.getElementById('rname').innerHTML = sname;
	
	//document.getElementById('hidepanel').style.display = 'block';
	document.getElementById('hidepanel').classList.remove('w3-hide');
};

document.getElemtnById('test').onkeyup = function(){
	var el = this;
	var txt = document.getElementById('test').value;
	// 자바스크립트 this : 함수를 호출한 객체
	alert(txt);
	alert('입력 내용' + el);
};
var list = document.getElementsByClassName('btn');
/*for(var i = 0; i < list.length; i++) {
	list[i].onclick = function(){
		var txt = this.innerText;
		// alert(txt);
		
		var tid = this.
	}
}*/