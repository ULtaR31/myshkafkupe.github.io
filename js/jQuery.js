$(document).ready(function($) {

	$('.burger').click(function(event) {
		$('.burger, .HeaderNav, .HeaderTime1').toggleClass('active1');
		$('body').toggleClass('lock');
	});

	$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

	$('#workBut').click(function(event){
		$('.opr').toggleClass('active4');
	})
	$('#bt1').click(function (event){
		$('.opr').addClass('active4');
	})
	$('.cross').click(function(event){
		$('.opr').addClass('active4');
	})

});