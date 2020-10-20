function func01(){
	document.getElementById('f1').onchange = function(e){
		var pic = URL.createObjectURL(e.target.files[0]);
		
		document.getElementById('img1').setAttribute('src', pic);
	}
}