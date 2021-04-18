$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	var ibg = document.querySelectorAll(".ibg");
	for(var i = 0; i < ibg.length; i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

//при нажимании что б бургер в крестик превращался
$('.header__menu-icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header__menu-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});