$(document).ready(function(){
	$('#namelist').css('display', 'none');
	
	$('#load').click(function(){
		$('#namelist').slideToggle(500);
	});
	
	$('#reset').click(function(){
		$('#namelist').css('display', 'none');
		$('#membinfo').css('display', 'none');
	});
});