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

var imgList = [
	'../img/download/shark01.jpg',
	'../img/download/shark02.jpg',
	'../img/download/shark03.jpg',
	'../img/download/shark04.jpg',
	'../img/download/shark05.jpg',
	'../img/download/shark06.jpg',
	'../img/download/shark07.jpg',
	'../img/download/shark08.jpg',
];

// 버튼에 이름 추가, 컬러 추가
for(var i=0; i<8; i++){
	document.getElementById(i+1+'').classList.add(color[i]);
	document.getElementById(i+1 + '').innerText = i+1;
};



function getId(el){
	// 아이디값 가져오고
	var sid = el.getAttribute('id');
	
	// 이미지 속성값 초기화
	for(var i=0; i<8; i++){
		document.getElementById('image-panel').style.removeProperty('background-image');
	}
	// 텍스트와 색상 변경
	document.getElementById('default-text').innerText = '';
	document.getElementById('image-panel').style.setProperty('background-image', 
};