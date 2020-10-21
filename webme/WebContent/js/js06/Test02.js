
function func01(){
	var el = document.getElementById('dv1');
	
	var node1 = el.childNodes;
	
//	alert(node1[0].nodeValue);
	
	document.getElementById('dv2').append('node1.childs : ' + node1.length);

	var el2 = document.createElement('p');
	el2.style.backgroundColor = 'green';
	el2.innerHTML = '여기는 p태그';
	document.getElementById('dv2').append(el2);
	document.getElementById('dv2').append('여기는 텍스트3');
}

/*
	정규표현식
	
		전방 탐색
		
			?=	---> 긍정 전방 탐색
				지정한 문자(열) 직전의 문자(열)을 탐색
				작성 방법 : 검사할문자(?=지정할문자)
				작성 방법 : (?=(검사할문자)(지정할문자))
				
				오직 'y'가 뒤따라오는 'x'에만 대응됩니다. 이것은 lookahead 라고 불립니다.
				예를 들어, /Jack(?=Sprat)/ 는 'Sprat'가 뒤따라오는 'Jack' 에만 대응됩니다. 
				/Jack(?=Sprat|Frost)/는 'Sprat' 또는 'Frost'가 뒤따라오는 'Jack'에만 대응됩니다. 
				그러나, 'Sprat' 및 'Frost' 는 대응 결과의 일부가 아닙니다.
		
			?!	---> 부정 전방 탐색
				- 지정한 문자 직전에는 패턴에 맞아도 인정하지 않겠다는 의미
				- 검색할 때 주로 사용됨
				- 작성 방법 : 검사할문자(?![지정한문자])
				
				'x'뒤에  'y'가 없는경우에만 'x'에 일치합니다. 이것은 negated lookahead 라고 불립니다.
				예를 들어, /\d+(?!\.)/는 소숫점이 뒤따라오지 않는 숫자에 일치합니다.
				정규식 /\d+(?!\.)/.exec("3.141")는 '3.141' 이 아닌 '141'에 일치합니다.
			
		후방 탐색
			
			?<= ---> 긍정 후방 탐색
			
				지정한 문자(열) 직후에 있는 문자(열)을 탐색
				작성 방법 : (?<=지정할문자)검사할문자
			
			?<! ---> 부정 후방 탐색

				- 지정한 문자 직후에는 패턴에 맞아도 인정하지 않겠다는 의미
				- 검색할 때 주로 사용됨
				- 작성 방법 : (?<![지정문자])검사할문자
*/