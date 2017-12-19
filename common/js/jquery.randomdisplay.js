jQuery(function(){

jQuery.fn.extend({
	randomdisplay : function(num) {
		return this.each(function() {
			var chn = jQuery(this).children().hide().length;
			for(var i = 0; i < num && i < chn; i++) {
				var r = parseInt(Math.random() * (chn - i)) + i;
				jQuery(this).children().eq(r).show().prependTo(jQuery(this));
			}
		});
	}
});

jQuery(function(){
	jQuery('[randomdisplay]').each(function() {
		jQuery(this).randomdisplay(jQuery(this).attr('randomdisplay'));
	});
});

});