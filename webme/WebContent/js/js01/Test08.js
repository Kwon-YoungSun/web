document.getElementById('test').innerHTML = '여기는 #test 태그';
document.getElementsByClassName('test')[0].innerHTML = '여기는 .test 태그';
document.getElementsByName('test')[0].innerHTML = '여기는 name이 test인 태그';
document.querySelectorAll('p.t3')[0].innerText = '<strong>여기는 .t3 태그</strong>';
// document.querySelectorAll('p.t3')[0].innerHTML = '<strong>여기는 .t3 태그</strong>';
document.getElementsByName('id')[0].value = 'home';

var txt = document.getElementById('title').innerHTML;

//alert('innerHTML : ' + txt);

txt = document.getElementById('title').innerText;

//alert('innerText : ' + txt);

txt = document.getElementById('title').textContent;

//alert('innerText : ' + txt);

document.getElementById('btn').onclick = function(){
	var sid = document.getElementById('id').value;
	document.getElementById('sun').innerText = sid;
}