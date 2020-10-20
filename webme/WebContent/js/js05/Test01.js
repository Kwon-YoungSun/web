function func01(){
	document.getElementById('submit').onclick = function(){
		// 할일
		// 데이터 읽고
		// 뭔가 검사하고 처리하고
		var sname = document.getElementById('tname').value;
		var sage = document.getElementById('tage').value;
		var sgen = document.getElementById('tgen').value;
		
		if(!(sname || sage || sgen)) { /*sname == null || sage == null || sgen == null*/
			alert('입력하세요');
			return;
		}
		// 대상 페이지로 데이터를 전송한다.
		// location.href = './sample.html?name='+sname+'&age='+sage+'&gen='+sgen;
		
		// 방법 2. 폼태그를 통째로 전송하는 방법
		// 2-1. input 태그에 데이터를 입력하고
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('gen').value = sgen;
		// 2-2. 감싸는 form 태그를 전송한다.
		document.getElementById('frm').submit();
	}
	
	document.getElementById('cancel').onclick = function(){
		var el = document.querySelectorAll('input[type="text"]');
		
		for(var i = 0; i < el.length; i++){
			el[i].value = '';
		}
	}
}

