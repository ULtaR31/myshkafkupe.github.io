$('.burger').click(function(event) {
	$('.burger, .HeaderNav, .HeaderTime1').toggleClass('active1');
	$('body').toggleClass('lock');
});