/* 
 * Titanium Studio - http://www.titaniumstudio.com
 * Main JavaScript source
 * See {root}/LICENSE for licensing details
 */

/*
 * Functions
 *
 */

/*
 *  jQuery functions
 */
$.fn.toggleFadeSlide = function(duration, easing, callback) {
	return this.animate({
		opacity: 'toggle',
		height: 'toggle'
	},
	duration, easing, callback
	);
}

/*
 *  Page functions
 */

function servicesHash() {
	var hashValue = window.location.hash.toString().split('#')[1];

	var validHashes = new Array(
		'design',
		'consulting'
		);
	var isValid = jQuery.inArray(hashValue, validHashes);
	if (isValid > -1)
	{
		hashValue = hashValue;
	}
	else
	{
		hashValue = 'design';
	}
	return hashValue;
}
/*
 *  Ready, set, go!
 */
$(document).ready(function(){
	// Internal page fades //
	if ($.browser.msie){
		$("#body, div[id^='header-box'], #footer").hide();
		$("#body, div[id^='header-box'], #footer").fadeIn(700);
	}
	else {
		$("#body, div[id^='header-box'], #footer").css('opacity', 0).animate({
			opacity: 1
		}, 700)
	}
	// rel='external' handler
	$("a[rel='external']").after('<img src="/images/icons/external.png" alt="External URL" style="margin: 0 0 3px 2px;" />');

	// Scrolling to an anchor with rel='anchor' attribute
	$("a[rel='anchor']").click(function(){
		var anchor = this.href.split('#')[1];

		$('html,body').animate({
			scrollTop: $("a[name='" + anchor + "']").offset().top
			},900)
	});

	// Set up the navigation hover animation
	$("#nav a").blend();

	/*
	 * Tooltips
	 */
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
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		}
	})
	$("span.define-socialicons").qtip({
		content: 'English: Extended set of social icons',
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
	$("span.define-xhtml").qtip({
		content: '<strong>XHTML</strong> 1.0 Strict has become the defacto XML markup language for well-formed website code.',
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
	$("span.define-html5").qtip({
		content: '<strong>HTML5</strong> is the latest incarnation of the HTML specification. While this version has not been finalized by the W3C and is not widely supported, its features are quickly making it into many of the latest browsers.',
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

	/*
         * Services slider
         
	var serviceName = servicesHash().toString();
	$("div[id^='services-detail-']").hide();
	$("div#services-detail-" + serviceName).show();
	$("ul#services-list h4."+ serviceName).addClass('selected');

	$("ul#services-list a").click(function(){
		var serviceID = $(this).closest('li').attr('id').split("li-")[1];
		// Be sure we don't animate on the current item
		if (serviceID != serviceName)
		{
			$("ul#services-list h4").removeClass("selected");
			$(this).parent().addClass("selected");

			$("div#services-detail-" + serviceName).toggleFadeSlide(600, 0, function()
			{
				$("div#services-detail-" + serviceID).toggleFadeSlide(800);
			});

			serviceName = serviceID;
		}
	});*/
});