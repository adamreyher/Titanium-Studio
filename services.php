<?php
/*
 * Page variables
 */

$pageTitle = (string) 'Custom-tailored services with attention to detail';

require('includes/header.php');
?>
			<div id="header-box-services">
				<div class="content">
					<h2>Services</h2>
					<p>The most important part of a trip is the journey. It’s the journey that defines our services and who we are. Enjoy the ride.</p>
					<p>We work with each and every client from the very beginning to establish a complete online marketing strategy and online presence that fits your business with an incredible attention to detail.</p>
				</div>
			</div>
			<div id="body">
				<?php require('includes/iewarning.php'); ?>
				<div class="encase">
					<div id="services-menu">
						<h2>Services</h2>
						<ul id="services-list">
							<li id="li-design"><h4 class="design"><a href="#design" rel="anchor">Web Design</a></h4></li>
							<li id="li-consulting"><h4 class="consulting"><a href="#consulting" rel="anchor">Consulting</a></h4></li>
							<li id="li-social-media"><h4 class="social-media"><a href="#social-media" rel="anchor">Social Media</a></h4></li>
						</ul>
					</div>
					<div id="services-detail">
						<div id="services-detail-design">
							<a name="design"></a>
							<h2><span class="accent">Web</span> Design</h2>
							<h3>Marketing by design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat augue a ligula mattis id varius orci mattis. Nam ut ultrices eros. Duis elit sem, pretium quis vulputate in, congue eu arcu. Suspendisse et risus metus, eget euismod mi. </p>
							<p>Aliquam vehicula metus vel dui dictum et accumsan dolor suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec at posuere elit. Integer nec elementum arcu. Maecenas placerat gravida malesuada. </p>
						</div>
						<div id="services-detail-consulting">
							<a name="consulting"></a>
							<h2>Consulting</h2>
							<p>Suspendisse pellentesque, lorem at vestibulum venenatis, massa risus pulvinar tellus, sit amet ultrices sem eros volutpat quam. Quisque lobortis, neque non vulputate dapibus, lacus dolor dignissim diam, ut malesuada turpis ipsum et quam.</p>
							<p>Etiam malesuada, nisl ut pulvinar dictum, purus metus egestas ante, a condimentum turpis sapien condimentum eros. In in consequat diam. Mauris volutpat sodales velit, ac mattis risus pellentesque at. Nunc accumsan velit ac arcu pharetra id tincidunt elit imperdiet. Nunc sit amet urna neque. </p>
						</div>
						<div id="services-detail-consulting">
							<a name="social-media"></a>
							<h2><span class="accent">Social</span> Media</h2>
							<p>Suspendisse pellentesque, lorem at vestibulum venenatis, massa risus pulvinar tellus, sit amet ultrices sem eros volutpat quam. Quisque lobortis, neque non vulputate dapibus, lacus dolor dignissim diam, ut malesuada turpis ipsum et quam.</p>
							<p>Etiam malesuada, nisl ut pulvinar dictum, purus metus egestas ante, a condimentum turpis sapien condimentum eros. In in consequat diam. Mauris volutpat sodales velit, ac mattis risus pellentesque at. Nunc accumsan velit ac arcu pharetra id tincidunt elit imperdiet. Nunc sit amet urna neque. </p>
						</div>

					</div>
				<div style="clear:both;"></div>
				</div>
				
			</div>
			<?php
				require("includes/footer.php");