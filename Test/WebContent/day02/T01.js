/*var fruit = ['apple', 'grape', 'orange'];

var fruits1 = fruit.join();
var fruits2 = fruit.join('-');
var fruits3 = fruit.join(' and ');
document.write(fruits1 + '<br>');
document.write(fruits2 + '<br>');
document.write(fruits3 + '<br>');

document.write('<hr>');

var fruits4 = fruit.concat('banana', 'pineapple');
document.write(fruits4 + '<br>');

fruits4.sort();
document.write(fruits4 + '<br>');

fruits4.reverse();
document.write(fruits4 + '<br>');*/


var kdata=['giraff', 'elephant', 'pig', 'cow', 'horse', 'cat', 'dog'];
/*var str1= kdata.slice(0, 4);
var str2= kdata.slice(2, -1);
var str3= kdata.slice(-4, -2);
document.write('1 : ' + str1 + '<br>');
document.write('2 : ' + str2 + '<br>');
document.write('3 : ' + str3 + '<br>');*/

/*var str1= kdata.splice(1, 2);
document.write(str1 + '<br>');
document.write(kdata + '<br>');

var str2= kdata.splice(1, 1, 'lion', 'tiger');
document.write(str2 + '<br>');
document.write(kdata + '<br>');

*/
var data= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum=0;
function addArr(value){
	sum+=value;
}
data.forEach(addArr);
document.write(sum + '<br>');


var sum2='';
function addArr2(item, index){
	document.write("배열 데이터 [" + index + "] : " + item + '<br>');
}
kdata.forEach(addArr2);
