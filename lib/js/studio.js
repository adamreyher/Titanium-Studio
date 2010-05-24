/* 
 * Titanium Studio - http://www.titaniumstudio.com
 * Main JavaScript source
 * See {root}/LICENSE for licensing details
 */

$(document).ready(function(){
	$("a[rel='external']").after('<img src="/images/icons/external.png" alt="External URL" style="margin: 0 0 3px 2px;" />');
	
	$("a[href^='#']").click(function(){
		var anchor = this.href.split('#')[1];

		$('html,body').animate({scrollTop: $("a[name='" + anchor + "']").offset().top},900);
	});

	$("#nav a").blend();
	$("a.tooltip-whysource").qtip({
		content: 'We sell our time and knowledge, not our products. If the products we create can be used and modified by others, it ultimately makes them that much better.',
		style:	{
			fontSize: 12,
			lineHeight: 1.5,
			name: 'cream'
			},
		position: {
			corner: {
				target: 'topRight',
				tooltip: 'bottomLeft'
			}
		}
	})
	$("span.define-affordance").qtip({
		content: 'An <b>affordance</b> is a quality of an object, or an environment, that allows an individual to perform an action. Simply put, it\'s intuitive and easy to use.',
		style:	{
			fontSize: 12,
			lineHeight: 1.5,
			name: 'blue'
			},
		position: {
			corner: {
				target: 'topRight',
				tooltip: 'bottomLeft'
			}
		}
	})
});