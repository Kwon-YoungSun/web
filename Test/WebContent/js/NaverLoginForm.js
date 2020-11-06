var str='<option value="월">월</option>';

for(var i = 0; i < 12; i++){
	str+='<option value=' + (i+1) + '>' +  (i+1) + '</option>';
}

document.getElementById('months').innerHTML = str;

// 경우의 수
/*
	1. 필수 정보입니다.(focusout) --> 입력한 데이터가 없이 포커스아웃한 경우
	2. 이미 사용중이거나 탈퇴한 아이디입니다. 혹은 ~~ 한 
	형식에 맞지 않습니다. --> 입력한 데이터가 있을 때 형식검사에 맞지 않는 경우
	3. 멋진 아이디네요! --> 입력한 데이터가 있고 형식검사에 맞는 경우
	4. 비밀번호 검사의 경우 > 비밀번호가 일치하지 않습니다. 
*/

/*$(document).ready(function(){
	var str; 	// 표시할 메세지를 담을 변수
	var pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
	
	$('#id').blur(function(){
	
		if(!($('#id').val())){
			str = '필수 정보입니다.';
		}
		$('#id_confirm').text(str).css('display', 'block');
	});
	
	$('#id').change(function(){
		var result = $('#id').val().replace(pat, '');
		if(result == ''){
			str = '멋진 아이디네요!';
		} else {
			str = '잘못된 형식입니다.';
		}
		$('#id_confirm').text(str).css('display', 'block');
	});
});*/

$(document).ready(function(){
	var str; 	// 표시할 메세지를 담을 변수
	
	$('#id').on({
		blur: function(){
			if(!($('#id').val())){
				$('#id_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
			}
		},
		change: function(){
			var pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
			var result = $('#id').val().replace(pat, '');
			if(result == ''){
				$('#id_confirm').css('color', 'green').text('멋진 아이디네요!').css('display', 'block');
			} else {
				$('#id_confirm').css('color', 'red').text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.').css('display', 'block');
			}
		}
	});
	
	$('#pw').on({
		blur: function(){
			if(!($('#pw').val())){
				$('#pw_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
			}
		},
		change: function(){
			var pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
			var result = $('#pw').val().replace(pat, '');
			if(result == ''){
				$('#pw_confirm').css('display', 'none');
			} else {
				$('#pw_confirm').css('color', 'red').text('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.').css('display', 'block');
			}
		}
	});
	
	$('#name').on({
		blur: function(){
			if(!($('#name').val())){
				$('#name_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
			}
		},
		change: function(){
			var pat = /^[가-힣]{2,10}$/;
			var result = $('#name').val().replace(pat, '');
			if(result == ''){
				$('#name_confirm').css('display', 'none');
			} else {
				$('#name_confirm').css('color', 'red').text('2~10자 한글을 사용하세요.').css('display', 'block');
			}
		}
	});
	
	// 생년월일
	/*
		1. 년도가 비어있는 경우 -> 태어난 년도 4자리를 정확하게 입력해 주세요.
		2. 월이 비어있는 경우(월 선택 시) -> 태어난 월을 선택하세요.
		3. 태어난 일이 비어있거나
	*/
	$('.date').on({
		blur: function(){
			// 비어 있는 데이터가 있는 경우
			if(!($('#year').val())){
				alert('year');
			} else if(($('select option:selected').val()) == '월'){
				alert('months');
			} else if(!($('#day').val())){
				alert('day');
			} else {
				return;
			}
			
			/*var str = '';
			str = $('select option:selected').val();
			alert(str);*/
		}
	});
});

/*var pat;	// 패턴을 담을 변수
//var str;	// 표시할 메세지를 담을 변수
$(document).ready(function(){
	var cur;	// 현재 포커스를 담을 변수
	
	$('.regex').on({
		blur: function(){
			cur = '#' + $(this).attr('id');
			if(!($(cur).val())){
				var text = cur + '_confirm';
				$(text).text('필수 정보입니다.').css('display', 'block');
			}
		},
		change: function(){
			// 아이디 가져오고
			cur = '#' + $(this).attr('id');
			// 아이디에 맞는 형식화검사 함수를 호출하고
			switch(cur){
			case '#id':
				pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
				break;
			case '#pw':
				pat = /^[0-9]{8}$/;
				break;
			case '#pwconf':
				pat = /^[0-9]{8}$/;
				break;
			case '#name':
				pat = /^[가-힣]{3,5}/;
				break;
			}
			
			if(cur != '#pwconf'){
				var result = $(cur).val().replace(pat, '');
				if(result == ''){
					$(cur + '_confirm').text('').css('display', 'none');				
				} else {
					$(cur + '_confirm').text('잘못된 형식입니다.').css('display', 'block');
				}
			} else {
				if($('#pw').val() == $(cur).val()){
					$(cur + '_confirm').text('비밀번호가 일치합니다.').css('display', 'block');
				} else {
					$(cur + '_confirm').text('비밀번호가 일치하지 않습니다.').css('display', 'block');					
				}
			}
		}
	});
	
	$('#year').change(function(){
		var year = $('#year').val();
		if(year > 2020 || year < 1900){
			$('#date_confirm').text('년도를 정확하게 입력하세요.').css('display', 'block');
		} else {
			$('#date_confirm').text('').css('display', 'none');			
		}
	});
	
	$('#day').change(function(){
		var day = $('#day').val();
		
	});
	
});*/