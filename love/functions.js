
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function(a){
	a.fn.typewriter=function(){
		this.each(function(){
			var d=a(this),c=d.html(),b=0;
			d.html("");
			var e=setInterval(function(){
				var f=c.substr(b,1);
				if(f=="<"){
					b=c.indexOf(">",b)+1
				} else {
					b++;
				}
				d.html(c.substring(0,b)+(b&1?"_":""));
				if(b>=c.length){
					clearInterval(e);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);
/**(function(a){a.fn.typewriter=function(){this.each(function(){var d=a(this),c=d.html(),b=0;d.html("");var e=setInterval(function(){var f=c.substr(b,1);if(f=="<"){b=c.indexOf(">",b)+1}else{b++}d.html(c.substring(0,b)+(b&1?"_":""));if(b>=c.length){clearInterval(e)}},75)});return this}})(jQuery);*/

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小時 <span class=\"digit\">" + minutes + "</span> 分鐘 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
