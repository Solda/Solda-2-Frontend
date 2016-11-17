$( document ).ready(function() {

		// 18 禁視窗


		$("a.hide-warning").click(function() {
			$("#warning").fadeOut();
		});

		// 噗浪頁顯示說明

		$(".open-popup").click(function() {
			$("#popup").fadeIn();
		});

		$(".close-popup, #popup").click(function() {
			$("#popup").fadeOut();
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

		// newproduct.html

var shipping1Showed = false;
$( ".shipping1.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping1Showed) {
		$(".shipping1.shipping-box").slideDown();
	} else {
		$(".shipping1.shipping-box").slideUp();
	}
	shipping1Showed = !shipping1Showed;
});

var shipping2Showed = false;
$( ".shipping2.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping2Showed) {
		$(".shipping2.shipping-box").slideDown();
	} else {
		$(".shipping2.shipping-box").slideUp();
	}
	shipping2Showed = !shipping2Showed;
});
var shipping3Showed = false;
$( ".shipping3.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping3Showed) {
		$(".shipping3.shipping-box").slideDown();
	} else {
		$(".shipping3.shipping-box").slideUp();
	}
	shipping3Showed = !shipping3Showed;
});
var shipping4Showed = false;
$( ".shipping4.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping4Showed) {
		$(".shipping4.shipping-box").slideDown();
	} else {
		$(".shipping4.shipping-box").slideUp();
	}
	shipping4Showed = !shipping4Showed;
});
var shipping5Showed = false;
$( ".shipping5.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping5Showed) {
		$(".shipping5.shipping-box").slideDown();
	} else {
		$(".shipping5.shipping-box").slideUp();
	}
	shipping5Showed = !shipping5Showed;
});
var shipping6Showed = false;
$( ".shipping6.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping6Showed) {
		$(".shipping6.shipping-box").slideDown();
	} else {
		$(".shipping6.shipping-box").slideUp();
	}
	shipping6Showed = !shipping6Showed;
});
var shipping7Showed = false;
$( ".shipping7.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping7Showed) {
		$(".shipping7.shipping-box").slideDown();
	} else {
		$(".shipping7.shipping-box").slideUp();
	}
	shipping7Showed = !shipping7Showed;
});
var shipping8Showed = false;
$( ".shipping8.card-padding .mdl-checkbox__label" ).click(function (e) {
	if (!shipping8Showed) {
		$(".shipping8.shipping-box").slideDown();
	} else {
		$(".shipping8.shipping-box").slideUp();
	}
	shipping8Showed = !shipping8Showed;
});

var misc = false;
$( "a.show-more-info" ).click(function (e) {
	if (!misc) {
		$(".more-info").slideDown();
	} else {
		$(".more-info").slideUp();
	}
	misc = !misc;
});

var independent = false;
$( ".mdl-radio__label.show-independent-shipping" ).click(function (e) {
	if (!independent) {
		$(".independent-shipping").slideDown();
	} else {
		$(".independent-shipping").slideUp();
	}
	independent = !independent;
});




});