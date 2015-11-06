$( document ).ready(function() {
		
		// 首頁簡單輪播

		$("#slideshow > div:gt(0)").hide();
		
		setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		},  5000);
		
		// 縮放目錄

		$( ".show-all-category" ).click(function() {
			$( ".category-container" ).toggleClass( 'show-all' );
		});		
		
		// 商家頁面，點預告可展開

		$( "a.expand-more, a.expand-less" ).click(function() {
			$( ".billboard-card" ).toggleClass( 'expand' );
		});	

});