$( document ).ready(function() {
		$("#slideshow > div:gt(0)").hide();
		
		setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(700)
		    .next()
		    .fadeIn(700)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		
		$( ".show-all-category" ).click(function() {
			$( ".category-container" ).toggleClass( 'show-all' );
		});		
		
});