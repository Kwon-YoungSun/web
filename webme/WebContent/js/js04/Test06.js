function Stud(name, age, gender){
	this.name = name,
	this.age = age,
	this.gender = gender,
	this.work = function(){
		return this.name + ' 씨가 열심히 공부합니다.';
	}
}

var jiwoo = new Stud('이지우', 26, '남자');
var sunghwan = new Stud('장성환', 27, '남자');

/*jiwoo.total = function(){
	return 250;
};*/
Stud.prototype.score = [];

Stud.prototype.total = function(){
	var ttl = 0;
	this.score.forEach(function(value){
		ttl += value;
	});
	
	return ttl;
};

jiwoo.score = [85, 85, 95];
sungwhan.score = [85, 95, 85];

document.write('jiwoo name : ' + jiwoo.name + '<br>');
document.write('jiwoo age : ' + jiwoo.age + '<br>');
document.write('jiwoo gender : ' + jiwoo.gender + '<br>');
document.write('jiwoo work : ' + jiwoo.work() + '<br>');
document.write('jiwoo total : ' + jiwoo.total() + '<br>');
document.write('<hr>');
document.write('sunghwan name : ' + sunghwan.name + '<br>');
document.write('sunghwan age : ' + sunghwan.age + '<br>');
document.write('sunghwan gender : ' + sunghwan.gender + '<br>');
document.write('sunghwan work : ' + sunghwan.work() + '<br>');
document.write('sunghwan total : ' + sunghwan.total() + '<br>');

