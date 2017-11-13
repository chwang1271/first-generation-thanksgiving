$(window).load(function(e) {
	$('#siteloader').hide();
});

$(function(){
	
	$('.menuToggle').click(function(e) {
        e.preventDefault();
		$(this).toggleClass('active');
		$('.nav-bar').slideToggle();
		$('.nav-bar').toggleClass('show');
    });
	
	//Toggle Content JS
	$('a.paid_logo').click(function(e) {
	e.preventDefault();	
	$('p.show_text').slideToggle(500);
	});
	$('p.show_text span.close').click(function(e) {
	e.preventDefault();	
	$('p.show_text').slideToggle(500);
	});
	
	
})