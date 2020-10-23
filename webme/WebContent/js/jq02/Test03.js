$(document).ready(function(){
	$('#btn1').click(function(){
		$('input').val('');
	});
	
	$('#btn2').click(function(){
		var tid = $('#id').val();
		var tpw = $('#pw').val();
		
		if(!(tid && tpw)){
			return;
		}
		
		$('#frm').submit();
	});
});	