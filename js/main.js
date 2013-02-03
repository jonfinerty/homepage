
$(document).ready(function(){

	$('.tile').hover(function(){
		$(this).addClass('inverted');
	}, function(){
		if ($(this).hasClass('inverted')) {
			$(this).removeClass('inverted');
		}
	});

	$('.profile-pic').click(function(){
		if ($('.bw').attr('src') === 'img/profile_bw.png') {
			$('.bw').attr('src', 'img/profile2_bw.png');
			$('.colour').attr('src', 'img/profile2_colour.png');
		} else {
			$('.bw').attr('src', 'img/profile_bw.png');
			$('.colour').attr('src', 'img/profile_colour.png');
		}
	});

});