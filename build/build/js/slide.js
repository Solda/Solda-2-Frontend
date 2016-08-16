$( document ).ready(function() {
	
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

});