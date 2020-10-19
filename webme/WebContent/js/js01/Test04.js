stdName = '이지우';
jsScore = 60;

var stdName;	// 변수 재선언(변수 호이스팅)
var jsScore;	// 변수 재선언(변수 호이스팅)

document.write('<div class="w3-content w3-center" style="max-width: 500px;">');
document.write('<h1 class="w3-amber w3-card-4 w3-padding">');
document.write('학생 이름 : ' + stdName + '<br>');
document.write('과목 점수 : ' + jsScore + '<br>');
document.write('</h1></div>');