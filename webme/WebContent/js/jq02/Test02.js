// 할 일
$(document).ready(function(){
	$('#btn1').click(function(){
		$('input').val('');
	});
	
	$('#btn2').click(function(){
		// 데이터 읽고
		var tid = $('#id').val();
		var tpw = $('#pw').val();
		
		if(!(tid && tpw)){
			return;
		}
		/*
			ajax의 형식을 알자.
		*/
		$.ajax({
			url: 'http://localhost:8080/login.cls',
			type: 'post',
			dataType: 'json',
			data: {
				id: tid,
				pw: tpw
			},
			success: function(obj){
				if(obj.result == 'YES'){
					$('#in01').addClass('w3-hide');
					$('#msg').parent().removeClass('w3-hide');
				} else {
					// 메세지 출력하고
					alert('### 로그인 실패 ###');
					// 입력태그의 내용 지우고
					$('input').val('');
					// 포커스 아이디로 이동시키고
					$('#id').focus();
				}
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
});