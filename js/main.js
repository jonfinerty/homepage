
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
	
	setTimeout(rotateProject, 6000);
});


function rotateProject(){
	if ($('.rotate a').attr('href') === 'https://github.com/jf8073/sublime-snake') {
		$('.rotate a').attr('href', 'http://www.ismymonitorbigenough.com');
		$('.rotate .info-title').text('IsMyMonitor\nBigEnough.com');
		$('.rotate .info-tagline').text('Do you have a big enough screen?');
		$('.rotate .info-desc').text('');
	} else {
		$('.rotate a').attr('href', 'https://github.com/jf8073/sublime-snake');
		$('.rotate .info-title').text('Sublime Snake');
		$('.rotate .info-tagline').text('A Plugin for Sublime Text 2');
		$('.rotate .info-desc').text('Lets you play snake with your code.');
	}
	
	setTimeout(rotateProject, 6000);
}