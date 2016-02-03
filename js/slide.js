$( document ).ready(function() {
		
		// 商家頁面，點預告可展開

		$( "a.expand-more, a.expand-less" ).click(function() {
			$( ".billboard-card" ).toggleClass( 'expand' );
		});	

		// 點兩下隱藏預告，只是為了看版面方便

		$( ".billboard-card" ).dblclick(function() {
			$( this ).hide();
		});	

		// 產品頁示範呼叫購物車

		$("#add-to-cart").click(function() {
			$("#checkout-fab").addClass("pop-in");
			$("#buy-now").addClass("normalize");
		});

		// 顯示自填運費

		$( ".show-self-fill" ).click(function() {
			$( ".self-fill" ).addClass( 'show' );
		});	

		// 顯示信用卡

		$( ".show-credit-card" ).click(function() {
			$( ".credit-card" ).addClass( 'show' );
		});	

		// 首頁切換商城目錄與個人目錄
		$("#user-nav").hide();

		$(".my-solda").click(function(){
			$("#user-nav").show();
			$("#store-nav").hide();
		});
	$(".back-solda").click(function(){
			$("#user-nav").hide();
			$("#store-nav").show();
		});

		// 首頁 topbar 切換 search bar

		$(".search-field").hide();
		$(".show-search-field").click(function(){
			$(".hide-when-search").hide()
			$("#sample1").focus();
			$(".search-field").show();
		});


});