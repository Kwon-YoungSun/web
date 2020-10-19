
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
}