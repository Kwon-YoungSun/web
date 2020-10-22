$(document).ready(function(){
	$('.w3-button').click(function(){
		// 내용 읽어오고
		var sname = $(this).siblings().first().text();
		var sage = $(this).siblings().eq(1).text();
		var stel = $(this).siblings().eq(2).text();
		var smail = $(this).siblings().eq(3).text();
		var sgen = $(this).siblings().eq(4).text();
		
		// sample.html에 전달하고
		$('#name').val(sname);
		$('#age').val(sage);
		$('#tel').val(stel);
		$('#mail').val(smail);
		$('#gen').val(sgen);
		
		// submit
		$('#frm1').submit();
	});
	
	$('#header').click(function(){
		$('.data').removeClass("w3-hide");
	});
});