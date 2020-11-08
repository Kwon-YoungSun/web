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
var idcheck = false;
var pwcheck = false;
var pwconfcheck = false;
var namecheck = false;
var datecheck = false;
var gencheck = false;
var mailcheck = true;
var telcheck = false;
var sncheck = false;


$(document).ready(function(){
	// 아이디 검사 함수
	// 아이디
	$('#id').on({
		blur: function(){
			if(!($('#id').val())){
				$('#id_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
				idcheck = false;
			}
		},
		change: function(){
			var pat = /^[a-z]{1}[a-z0-9_-]{4,18}$/g;
			var result = $('#id').val().replace(pat, '');
			if(result == ''){
				$('#id_confirm').css('color', 'green').text('멋진 아이디네요!').css('display', 'block');
				idcheck = true;
			} else {
				$('#id_confirm').css('color', 'red').text('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.').css('display', 'block');
				idcheck = false;
			}
		}
	});
	
	// 비밀번호
	$('#pw').on({
		blur: function(){
			if(!($('#pw').val())){
				$('.lock_img').css('background-image', 'url(../img/download/pw_default.png)');
				$('.step_txt').css('display', 'none');
				$('#pw_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
				pwcheck = false;
			}
		},
		change: function(){
			var pat =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
			var result = $('#pw').val().replace(pat, '');
			if(result == ''){
				$('.lock_img').css('background-image', 'url(../img/download/pw_safe.png)');
				$('.step_txt').css({display: 'block', color: '#03c75a'}).text('안전');
				$('#pw_confirm').css('display', 'none');
				pwcheck = true;
			} else {
				$('.lock_img').css('background-image', 'url(../img/download/pw_fail.png)');
				$('.step_txt').css({display: 'block', color: 'red'}).text('사용불가');
				$('#pw_confirm').css('color', 'red').text('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.').css('display', 'block');
				pwcheck = false;
			}
		}
	});
	
	// 비밀번호 확인
	$('#pwconf').on({
		blur: function(){
			if(!($('#pwconf').val())){
				$('.lock_img2').css('background-image', 'url(../img/download/pwconf_default.png)');
				$('#pwconf_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
				pwconfcheck = false;
			}
		},
		change: function(){
			var result = $('#pw').val() == $('#pwconf').val();
			if(result){
				$('.lock_img2').css('background-image', 'url(../img/download/pwconf_safe.png)');
				$('#pwconf_confirm').css('display', 'none');
				pwconfcheck = true;
			} else {
				$('.lock_img2').css('background-image', 'url(../img/download/pwconf_default.png)');
				$('#pwconf_confirm').css('color', 'red').text('비밀번호가 일치하지 않습니다.').css('display', 'block');
				pwconfcheck = false;
			}
		}
	});
	
	// 이름
	$('#name').on({
		blur: function(){
			if(!($('#name').val())){
				$('#name_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
				namecheck = false;
			}
		},
		change: function(){
			var pat = /^[가-힣]{2,10}$/;
			var result = $('#name').val().replace(pat, '');
			if(result == ''){
				$('#name_confirm').css('display', 'none');
				namecheck = true;
			} else {
				$('#name_confirm').css('color', 'red').text('2~10자 한글을 사용하세요.').css('display', 'block');
				namecheck = false;
			}
		}
	});
	
	// 생년월일
	/*
		1. 년도가 비어있는 경우 -> 태어난 년도 4자리를 정확하게 입력해 주세요.
		2. 월이 비어있는 경우(월 선택 시) -> 태어난 월을 선택하세요.
		3. 태어난 일이 비어있거나
		4. 1921년 이전에 태어난 사람 -> 정말이세요?
		5. 현재 날짜 이후 입력 --> 미래에서 오셨군요.^^
		6. 만 14세 미만 --> 만 14세 미만은 보호자의 동의가 필요합니다.
	*/
	var today = new Date();
	var tyear = today.getFullYear();
	var tmonth = today.getMonth() + 1;
	var tdate = today.getDate();
	// 만 14세 미만 기준 출생연도
	var kyear = tyear - 14;
//	alert(kyear); <== 2006
//	alert(tyear + '-' + tmonth + '-' +tdate);
	$('.date').blur(function(){
		// 비어 있는 데이터가 있는 경우
		if(!($('#year').val())){
			$('#date_confirm').css('color', 'red').text('태어난 년도 4자리를 정확하게 입력하세요.').css('display', 'block');
			datecheck = false;
		} else if(($('select option:selected').val()) == '월'){
			$('#date_confirm').css('color', 'red').text('태어난 월을 선택하세요.').css('display', 'block');
			datecheck = false;
		} else if(!($('#day').val())){
			$('#date_confirm').css('color', 'red').text('태어난 일(날짜) 2자리를 정확하게 입력하세요.').css('display', 'block');
			datecheck = false;
		} else {
			// 비어 있는 데이터가 없는 경우
			if($('#year').val() < 1921 ){
				// 1921년 이전 년도로 입력한 경우
				$('#date_confirm').css('color', 'red').text('정말이세요?').css('display', 'block');
				datecheck = false;
			} else if($('#year').val() > tyear){
				// 미래의 년도로 입력한 경우
				$('#date_confirm').css('color', 'red').text('미래에서 오셨군요.^^').css('display', 'block');
				datecheck = false;
			} else if($('#year').val() == tyear){
				// 년도가 현재 년도일 때
				if($('#months > option:selected').val() > tmonth){
					// 현재 월보다 미래의 월로 입력한 경우
					$('#date_confirm').css('color', 'red').text('미래에서 오셨군요.^^').css('display', 'block');
					datecheck = false;
				} else if($('select option:selected').val() == tmonth){
					// 현재 월로 입력한 경우
					if($('#day').val() > tdate){
						// 현재 날짜보다 미래의 날짜로 입력한 경우
						$('#date_confirm').css('color', 'red').text('미래에서 오셨군요.^^').css('display', 'block');
						datecheck = false;
					} else {
						// 보호자 동의 처리
						$('#date_confirm').css('color', 'red').text('만 14세 미만의 어린이는 보호자 동의가 필요합니다.').css('display', 'block');
						datecheck = false;
						// 보호자 동의 처리 함수
					}
				} else {
					// 현재 월보다 이전으로 입력한 경우
					// 보호자 동의 처리
					$('#date_confirm').css('color', 'red').text('만 14세 미만의 어린이는 보호자 동의가 필요합니다.').css('display', 'block');
					datecheck = false;
					// 보호자 동의 처리 함수
				}
			} /*else if($('#year').val() > kyear){
				// 만 14세 미만 기준 년도 이후에 태어난 경우
				$('#date_confirm').css('color', 'red').text('만 14세 미만의 어린이는 보호자 동의가 필요합니다.').css('display', 'block');
			} else if($('#year').val() == kyear){
				// 만 14세 미만 기준 년도와 같은 년도에 태어난 경우
				// 만 14세 기준에 걸칠 때
				alert(('#month').val());
			}*/ else {
				$('#date_confirm').css('display', 'none');
				datecheck = true;
			}
		}
	});
	
	// 성별
	$('#gen').change(function(){
		if($('#gen option:selected').val() == '성별' ){
			$('#gen_confirm').css('color', 'red').text('필수 정보입니다.').css('display', 'block');
			gencheck = false;
		} else {
			$('#gen_confirm').css('display', 'none');
			gencheck = true;
		}
	});
	
	// 메일
	$('#mail').change(function(){
		var pat = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
		var result = $('#mail').val().replace(pat, '');
		if(result == ''){
			$('#mail_confirm').css('display', 'none');
			mailcheck = true;
		} else {
			$('#mail_confirm').css('color', 'red').text('이메일 주소를 다시 확인해주세요.').css('display', 'block');
			mailcheck = false;
		}
	});
	
	// 전화번호
	$('#tel').on({
		blur: function(){
			if(!($('#tel').val())){
				$('#tel_confirm').css('color', 'red').text('전화번호를 입력해주세요.').css('display', 'block');
				telcheck = false;
			} else {
				telcheck = true;
			}
		}
	});
	
	
	// 인증번호
	var snum;
	$('#snBtn').click(function(){
		var pat = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
		var result = $('#tel').val().replace(pat, '');
		if(!$('#tel').val()){
			$('#tel_confirm').css('color', 'red').text('전화번호를 입력해주세요.').css('display', 'block');
			telcheck = false;
			return;
		}
		if(result == ''){
			var senum = Math.floor((Math.random() * (9999 - 1000) + 1000 + 1));
			snum = senum;
			$('#tel_confirm').css('display', 'none');
			$('#serialnum').removeAttr('disabled').val(senum);
			$('#sn_notice').css('color', 'green').html('인증번호를 발송했습니다.(유효시간 30분)<br>' + 
 					'인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.<br>' + 
					'이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.').css('display', 'block');
			telcheck = true;
		} else {
			$('#tel_confirm').css('color', 'red').text('형식에 맞지 않는 번호입니다.(- 기호 없이 입력)').css('display', 'block');
			telcheck = false;
		}
	});
	
	$('#serialnum').blur(function(){
		if(snum != $('#serialnum').val()){
			$('#sn_confirm').css('color', 'red').text('인증번호를 다시 확인해주세요.').css('display', 'block');
			sncheck = false;
		} else {
			$('#sn_confirm').css('display', 'none');
			sncheck = true;
		}
	});
	
	$('#subBtn').click(function(){
/*		checkForm = idconf1()
		checkForm = idconf2();*/
		/*if(idcheck && pwcheck && namecheck && datecheck && gencheck && mailcheck && telcheck && sncheck) {
			alert('submit!');
			$('#frm').submit();
		} else {
			alert(idcheck + '-' + pwcheck + '-' + namecheck + '-' + datecheck + '-' + gencheck + '-' +mailcheck + '-' +telcheck + '-' +sncheck);
			return;
		}*/
		if(!idcheck){
			alert('아이디를 다시 확인해주세요.');
			$('#id').focus();
		} else if(!pwcheck){
			alert('비밀번호를 다시 확인해주세요.');
			$('#pw').focus();
		} else if(!pwconfcheck) {
			alert('재입력한 비밀번호가 다릅니다.');
			$('#pwconf').focus();
		} else if(!namecheck) {
			alert('이름을 다시 확인해주세요.');
			$('#name').focus();
		} else if(!datecheck) {
			alert('생년월일을 다시 확인해주세요.');
			$('#year').focus();
		}else if(!gencheck) {
			alert('성별입력이 되지 않았습니다.');
			$('#gen').focus();
		}else if(!mailcheck) {
			alert('이메일 형식이 잘못되었습니다.');
			$('#mail').focus();
		}else if(!telcheck) {
			alert('전화번호를 다시 확인해주세요.');
			$('#tel').focus();
		}else if(!sncheck) {
			alert('인증번호를 확인해주세요.');
			$('#serialnum').focus();
		} else {
			alert('회원가입이 완료되었습니다!');
			$('#frm').submit();
		}
	});
});


/*
if($('#month').val() > tmonth){
// 현재 월 이후생일 때
$('#date_confirm').css('color', 'red').text('만 14세 미만의 어린이는 보호자 동의가 필요합니다.').css('display', 'block');
// 보호자 동의 처리 함수
} else if($('#month').val() == tmonth){
// 현재 월 생일 때
if($('#day').val() > tday){
	// 오늘 날짜 이후의 날에 태어났을 때
	$('#date_confirm').css('color', 'red').text('만 14세 미만의 어린이는 보호자 동의가 필요합니다.').css('display', 'block');								
} else {
	// 오늘 날짜 이전에 태어났을 때
	$('#date_confirm').css('display', 'none');
}
}
*/