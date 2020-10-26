var str='<option value="month">월</option>';

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

/*$(document).ready(function(){
	var str; 	// 표시할 메세지를 담을 변수
	var pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
	
	$('#id').on({
		blur: function(){
			if(!($('#id').val())){
				str = '필수 정보입니다.';
			}
			$('#id_confirm').text(str).css('display', 'block');
		},
		change: function(){
			var result = $('#id').val().replace(pat, '');
			if(result == ''){
				str = '멋진 아이디네요!';
			} else {
				str = '잘못된 형식입니다.';
			}
			$('#id_confirm').text(str).css('display', 'block');
		}
	});
});*/

var pat;	// 패턴을 담을 변수
var str;	// 표시할 메세지를 담을 변수
$(document).ready(function(){
	var cur;	// 현재 포커스를 담을 변수
	
	$('.regex').on({
		blur: function(){
			cur = '#' + $(this).attr('id');
			if(!($(cur).val())){
				str = '필수 정보입니다.';
			}
			var text = cur + '_confirm';
			$(text).text(str).css('display', 'block');
		},
		change: function(){
			// 아이디 가져오고
			cur = '#' + $(this).attr('id');
			// 아이디에 맞는 형식화검사 함수를 호출하고
			switch(cur){
			case '#id':
				idConf(cur);
				break;
			case '#pw':
				pwConf(cur);
				break;
			case '#pwconf':
				
				break;
			}
		}
	});
});

function idConf(cur){
	pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
	var result = $(cur).val().replace(pat, '');
	if(result == ''){
		str = '멋진 아이디네요!';
	} else {
		str = '잘못된 형식입니다.';
	}
	$('#id_confirm').text(str).css('display', 'block');
}

function pwConf(cur){
	pat = /^/g;
	var result = $(cur).val().replace(pat, '');
	if(result == ''){
		return;
	} else {
		str = '잘못된 형식입니다.';
	}
	$('#pw_confirm').text(str).css('display', 'block');
}