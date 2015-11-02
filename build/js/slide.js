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
		
		// 顯示搜尋
		
		// $( "a.category-icon.search" ).click(function() {
		// 	$( "main.mdl-layout__content" ).toggleClass( 'show-search-full' );
		// 	$("#search").focus();
		// });		
		// $( ".logo img" ).click(function() {
		// 	$( "main.mdl-layout__content" ).toggleClass( 'show-search-full' );
		// });		


});