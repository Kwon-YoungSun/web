var color = [
	'w3-red', // 0
	'w3-pink', // 1
	'w3-purple', // 2
	'w3-deep-purple', // 3 
	'w3-indigo', //4
	'w3-blue', // 5
	'w3-aqua', // 6
	'w3-teal' // 7
];

// 버튼에 색상 추가
for(var i=0; i<8; i++){
	document.getElementById(i+1 + '').classList.add(color[i]);
};

/*document.getElementById('1').onclick = function(){
	
	document.getElementById('color-panel').classList.add(color[0]);
}*/

function getId(el){
	// 아이디값 가져오고
	var sid = el.getAttribute('id');
	// 컬러이름 가져오고
	var name = document.getElementById(sid).innerText;
	// color 속성값 초기화
	for(var i=0; i<8; i++){
		document.getElementById('color-panel').classList.remove(color[i]);
	}
	// 텍스트와 색상 변경
	document.getElementById('default-text').innerText = name;
	document.getElementById('color-panel').classList.add(color[sid-1]);
};