/* 
 * Titanium Studio - http://www.titaniumstudio.com
 * Main JavaScript source
 * See {root}/LICENSE for licensing details
 */

$(document).ready(function(){
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
});