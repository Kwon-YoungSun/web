var str='<option value="month">월</option>';

for(var i = 0; i < 12; i++){
	str+='<option value=' + (i+1) + '>' +  (i+1) + '</option>';
}

document.getElementById('months').innerHTML = str;