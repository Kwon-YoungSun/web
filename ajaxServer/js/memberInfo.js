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
//				alert(kdata);
				for(var i = 0; i < kdata.length; i++){
					$('#btnbox2').append('<div class="w3-col m2 w3-purple w3-button" id="'+ kdata[i] +'">'+ data[kdata[i]] +'</div>');
//					$('#btnbox2').append('<div class="w3-col m2 w3-purple w3-button" id="'+ kdata[i] +'" onclick="getInfo(this)">'+ data[kdata[i]] +'</div>');
					
					$('#' + kdata[i]).click(function(){
						var sno = $(this).attr('id');
						// 함수 내 this의 의미 : 함수를 호출한 객체 자신(버튼태그)
						$.ajax({
							url: 'http://localhost:8080/memberDetail.cls',
							type: 'post',
							dataType: 'json',
							data: {
								mno: sno
							},
							success: function(obj){
								$('#mno').html(obj.mno);
								$('#id').html(obj.id);
								$('#name').html(obj.name);
								$('#tel').html(obj.tel);
								$('#mail').html(obj.mail);
								$('#gen').html(obj.gen);
								
								var str = $('#infobox').css('display', 'block');
								if(str != 'none'){
									$('#infobox').stop().slideDown(1000);
								}
							},
							error: function(){
								alert('### 서버 접속 에러 ###');
							}
						});
					});
				}
				
				// 감춰진 태그 보여주고
				$('#btnbox2').slideDown(100);
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
});

/*//회원정보 가져오는 함수
function getInfo(el){
	var data = $(el).attr('id');
	// 서버에 데이터를 비동기로 보내고 받는다.
	$.ajax({
		url: 'http://localhost:8080/memberDetail.cls',
		type: 'post',
		dataType: 'json',
		data: {
			mno: data
		},
		success: function(obj){
			$('#mno').html(obj.mno);
			$('#id').html(obj.id);
			$('#name').html(obj.name);
			$('#tel').html(obj.tel);
			$('#mail').html(obj.mail);
			$('#gen').html(obj.gen);
			
			var str = $('#infobox').css('display', 'block');
			if(str != 'none'){
				$('#infobox').stop().slideDown(1000);
			}
		},
		error: function(){
			alert('### 서버 접속 에러 ###');
		}
	});
}*/