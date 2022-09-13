var $window = $(window);

function resizeWidth() {

	if ($window.width() > 1029) {
		// remove scroll bar
		$('#nav-wrapper').removeClass('nav-scroll', 300);

		$(window).scroll(function () { // check if scroll event happened
			if ($(window).scrollTop() > 20) { // check if user scrolled more than 50 from top of the browser window
				$('#menu').addClass('nav-color', 300);
			} else {
				$('#menu').removeClass('nav-color', 300);
			}
		});

	} else {
		// input Checkbox event happened
		$('#drop').on('click', function () {
			if ($(this).is(':checked')) {
				$('span.icon-menu').removeClass('icon-menu', 600).addClass('icon-close');
				$('#nav-wrapper').addClass('nav-scroll', 300);
			} else {
				$('span.icon-close').removeClass('icon-close', 600).addClass('icon-menu');
				$('#nav-wrapper').removeClass('nav-scroll', 300);

				// Reload windows
				window.location.reload();
			}
		});
	}

	if ($window.width() <= 1029) {
		// Remove nav background
		$('#menu').removeClass('nav-color', 300);
	}











}

// Execute on load
resizeWidth();

// Bind event listener
$(window).resize(resizeWidth);