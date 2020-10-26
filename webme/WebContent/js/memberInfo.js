$(document).ready(function(){
	// 초기화 버튼 클릭 이벤트
	$('#rbtn').click(function(){
		$('#btnbox2').slideUp(100);
		$('#btnbox2').html('');
		$('#infobox').slideUp(100);
		$('.content').html('');
	});
	
	// 리스트 버튼 클릭 이벤트
	$('#lbtn').click(function(){
		$.ajax({
			url: 'http://localhost:8080/memberList.cls',
			type: 'get',
			datatype: 'json',
			success: function(data){
				// data <== {회원번호: 이름, 회원번호: 이름, ...}
				var kdata = Object.keys(data); // 키만 뽑아서 배열 형태로 만든다.
				for(var i = 0; kdata.length; i++){
					$('#btnbox2').append('<div class="w3-col m2 w3-purple w3-button" id="'+ kdata[i] +'">'+ data.kdata[i] +'</div>');
				}
				
				// 감춰진 태그 보여주고
				$('#btnbox2').slideDown(1000);
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
});
