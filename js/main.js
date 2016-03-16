$(document).ready(function() {
	
// when user hovers over 'power' image, power-2 image appears//
	$('.power-image').hover(function() {
		$(this).attr('src', 'images/power-2.png');
	}, function() {
		$(this).attr('src', 'images/power.png');
	});
	
// when user hovers over 'yin' image, yin-2 image appears//
	$('.yin-image').hover(function(){
		$(this).attr('src', 'images/yin-2.png');
	}, function() {
		$(this).attr('src', 'images/yin.png');
	});
	
// when user hovers over 'basics' image, basics-2 image appears//	
	$('.basics-image').hover(function(){
		$(this).attr('src', 'images/basics-2.png');
	}, function() {
		$(this).attr('src', 'images/basics.png');
	});
	
// when user hovers over 'hot' image, hot-2 image appears//	
	$('.hot-image').hover(function(){
		$(this).attr('src', 'images/hot-2.png');
	}, function() {
		$(this).attr('src', 'images/hot.png');
	});
	
	
	
	
	
	
	
	
	
	
});
//
//var myName = 'Suyin';
//	
//var nameOfFunction = function(somethingIWantToUseInTheFunction) {
//	alert(somethingIWantToUseInTheFunction);
//};
//
//nameOfFunction(myName);
//	
//	
//	var table = function(var legs = soething that you told me) {
//	var legs = soething that you told me
//	console.log(legs);
//}
//
//
//
//table(4)
//
//function(var legs = 4) {
//	var legs = 4
//	alert(legs) // alert 4
//}