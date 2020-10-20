function func01(){
	/*document.frm.sel.onchange = function(){
		var data = document.frm.sel.value;
		var idx = document.frm.sel.selectedIndex;
		alert(data + ' : ' + idx);
	}*/
	
	document.getElementById('btn').onclick = function(){
		var sno = prompt('0 ~ 6 사이의 번호 입력!');
		
		var no = parseInt(sno); // 형변환
		
		document.frm.sel.selectedIndex = no;
	}
	
	// setInterval('func02()', 1000); // 일정시간을 기준으로 계속 반복시키는 함수
	setTimeout('func02()', 3000);
}
function func02(){
	var d1 = new Date();
	var str = d1.getFullYear() + '년' +( d1.getMonth() + 1) + '월' + 
				d1.getDate() + '일' + 
				strDay(d1.getDay()) + '요일' +
				d1.getHours() + '시' +
				d1.getMinutes() + '초' + 
				d1.getMilliseconds() + '밀리초';
				
	document.getElementById('time').innerText = str;
	
	setTimeout('func03()', 3000);
}

function func03(){
	location.href = 'Sample.html';
}
function strDay(d){
	var str= '';
	switch(d){
		case 0:
			str = '일';
			break;
		case 1:
			str = '월';
			break;
		case 2:
			str = '화';
			break;
		case 3:
			str = '수';
			break;
		case 4:
			str = '목';
			break;
		case 5:
			str = '금';
			break;
		case 6:
			str = '토';
			break;
	}
	return str;
}