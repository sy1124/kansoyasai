jQuery(function(){
	jQuery(window).scroll(function() {
		var imagePos01 = jQuery('#box01').offset().top;
		var imagePos02 = jQuery('#box02').offset().top;
		var imagePos03 = jQuery('#box03').offset().top;
		var imagePos04 = jQuery('#box04').offset().top;
		var imagePos05 = jQuery('#box05').offset().top;
		var imagePos06 = jQuery('#box06').offset().top;
	
		var topOfWindow = jQuery(window).scrollTop();
	
		if (imagePos01 > topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
		}
		if (imagePos01 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:first-of-type a').addClass('current');
		}
		if (imagePos02 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(2) a').addClass('current');
		}
		if (imagePos03 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(3) a').addClass('current');
		}
		if (imagePos04 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(4) a').addClass('current');
		}
		if (imagePos05 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:nth-of-type(5) a').addClass('current');
		}
		if (imagePos06 <= topOfWindow) {
			jQuery('ul#nav li a').removeClass('current');
			jQuery('ul#nav > li:last-of-type a').addClass('current');
		}
	});

// PageScroller
	jQuery.extend(jQuery.easing, {
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		}
	});
	jQuery(document).on('click','a.goBox',function() {
		jQuery('#nav a').removeClass('current');
		jQuery(this).addClass('current');
		if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = jQuery(this).attr("href");
			target = target.length && target || jQuery('[name=' + this.hash.slice(1) +']');
			var ua;
			ua = window.navigator.userAgent.toLowerCase();
			if(ua.indexOf('trident')!=-1||navigator.userAgent.indexOf('MSIE')!=-1||navigator.userAgent.indexOf('Firefox')!=-1) {
				var scroll = jQuery('html');
			} else {
				var scroll = jQuery('body');
			}
			if(target.length) {
				var p = jQuery(target).offset().top;
				scroll.animate({scrollTop: p +1 }, 1000, 'easeOutCubic');
				return false;
			}
		}
	});

// FIXED HEADNAV
	var boxTop = jQuery('#nav').offset().top;
	jQuery(window).scroll(function () {
		if(jQuery(window).scrollTop() >= boxTop) {
			jQuery('#nav').addClass('fixed');
		} else {
			jQuery('#nav').removeClass('fixed');
		}
	});

// FIXEDMENU X-SCROLL
	jQuery(window).on('load resize',function(){
		var ww = window.innerWidth;
		if(ww < 1070) {
			jQuery(window).on('scroll',function(){
				jQuery('.fixed').css('left', -jQuery(window).scrollLeft());
			});
		} else {
			jQuery(window).on('scroll',function(){
				jQuery('.fixed').css('left', 'auto');
			});
		}
	});

	jQuery(document).on('click','div.narrow h1',function() {
		jQuery('div#box05 div:not(.narrow)').animate({height:'120px'},600).addClass('narrow');
		jQuery(this).parent('div').animate({height:'560px'},600).removeClass('narrow');
	});

var $deferredAnim = $.Deferred( function( deferredAnim ){
	//thenでファンクション名を繋げる  
	deferredAnim.then(anim_01)
	.then(anim_02)
	.then(anim_03)
	.then(anim_04)
	.then(anim_05)
	.then(anim_06);
});

function anim_01 (){
	$('div#box03 ol > li:first-of-type h2 img').addClass('fadeIn animated');
}
function anim_02 (){
	$('div#box03 ol > li:nth-of-type(2) h2 img').delay(750).queue(function(){
		jQuery(this).addClass('fadeIn animated');
	});
}
function anim_03 (){
	$('div#box03 ol > li:nth-of-type(3) h2 img').delay(1500).queue(function(){
		jQuery(this).addClass('fadeIn animated');
	});
}
function anim_04 (){
	$('div#box03 ol > li:nth-of-type(4) h2 img').delay(2250).queue(function(){
		jQuery(this).addClass('fadeIn animated');
	});
}
function anim_05 (){
	$('div#box03 ol > li:nth-of-type(5) h2 img').delay(3000).queue(function(){
		jQuery(this).addClass('fadeIn animated');
	});
}
function anim_06 (){
	$('div#box03 ol > li:last-of-type h2 img').delay(3750).queue(function(){
		jQuery(this).addClass('fadeIn animated');
	});
}

	jQuery(window).scroll(function() {
		jQuery('#box01').each(function(){
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				jQuery('#box01 > div:first-of-type > img').addClass('fadeIn animated');
			}
			if (imagePos < topOfWindow+100) {
				jQuery('#box01 > div:last-of-type > img').addClass('fadeIn animated');
			}
		});
		jQuery('#box02').each(function(){
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow) {
				jQuery('#box02 > p').addClass('fadeIn animated');
				jQuery('#box02 > div').addClass('fadeIn animated');
			}
		});
		jQuery('div#box03').each(function(){
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				$deferredAnim.resolve(); 
			}
		});
		jQuery('#box04 div#recipes article > div:first-of-type').each(function(){
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				jQuery(this).addClass('fadeInUp animated');
			}
		});
	});

	jQuery('.goRecipe').colorbox({inline:true, width:'1000px', height:'600px', opacity:'1', close:'&#215;'});

});
