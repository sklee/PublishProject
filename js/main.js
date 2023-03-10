$(document).ready(function () {
	//initDom();

	msieversion();
	function msieversion() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0) {
			//$("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");
			console.log("IE10");
		} else {
			//AOS.init();
			// Animate IE10�̻� ����
		}
	}

	var team = new Swiper(".team-slider", {
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".team-pager",
			clickable: true,
		},
	});

	/*
	recPlay = new Swiper(".recplay-slider", {
		loop: true,
		slidesPerView: 6,
		slidesPerGroup: 6,
		spaceBetween: 1,
		navigation: {
			nextEl: ".recplay-next",
			prevEl: ".recplay-prev",
		},
		pagination: {
			el: ".recplay-pager",
			clickable: true,
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				centeredSlides: true,
			},
			560: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
		},
	});
	
	

	*/

	$(window).on("resize", function () {
		//location.reload();
	});
});
