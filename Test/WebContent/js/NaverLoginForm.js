var str='<option value="month">월</option>';

for(var i = 0; i < 12; i++){
	str+='<option value=' + (i+1) + '>' +  (i+1) + '</option>';
}

document.getElementById('months').innerHTML = str;

// 경우의 수
/*
	1. 필수 정보입니다.(focusout)
	2. 이미 사용중이거나 탈퇴한 아이디입니다. 혹은 ~~ 한 
	형식에 맞지 않습니다.
	3. 멋진 아이디네요!
	4. 비밀번호 검사의 경우 > 비밀번호가 일치하지 않습니다.
*/

function func01(){
	document.getElementById('id_confirm').style.display = 'block';
	alert('포커스아웃');
}