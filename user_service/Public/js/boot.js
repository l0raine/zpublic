$(function (){
	if(!window.PUBLIC_URL){
		window.PUBLIC_URL = '/Public';
	}
	if(!window.APP_DEBUG){
		window.APP_DEBUG = false;
	}
	var status = APP_DEBUG? 'js' : 'scripts';
	var min = APP_DEBUG? '' : '.min';
	requirejs.config({
		baseUrl    : PUBLIC_URL + '/' + status,
		waitSeconds: 1000,
		paths      : {
			'ajaxForm': 'ajaxForm'+min,
			'bs-alert': 'bs-alert'+min
		},
		packages   : [
			/*{name: 'playosb', path: 'playosb', main: 'playosb'}*/
		]
	});
	define('jquery', [], function (){
		$.fn.extend({
			removeClasses: function(regex){
				var reg = new RegExp('(\\s|^)'+regex+'(\\s|$)','g');
				return $(this).each(function(i,e){
					this.className = this.className.replace(reg, '');
				});
			}
		});
		return $;
	});
	require(['jquery', 'ajaxForm'], function ($, autoAjax){
		autoAjax();
	});
});
