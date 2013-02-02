
$(document).ready(function(){

	$('.tile').hover(function(){
		$(this).addClass('inverted');
	}, function(){
		if ($(this).hasClass('inverted')) {
			$(this).removeClass('inverted');
		}
	});

});