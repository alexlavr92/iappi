/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio HTML5 Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sidebar Navigation
// Sticky Header
// Hamburger Menu
// Scroll To Section
// OnePage Active Class
// Portfolio Filter
// Portfolio Gallery Carousel
// Testimonial Carousel
// Nice Select
// ALL Popup
// Preloader
// Sidebar Hover BG Color
// Services Hover BG
// Portfolio Filter BG Color
// Funfact
// WoW Js

****************************************************/

(function ($) {
	"use strict";

	/*------------------------------------------------------
  /  Data js
  /------------------------------------------------------*/
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {

		/*------------------------------------------------------
		/  Sticky Header
		/------------------------------------------------------*/
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});


		/*------------------------------------------------------
		/  Hamburger Menu
		/------------------------------------------------------*/
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".header-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".header-menu ul li a").on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".header-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});

		/*------------------------------------------------------
		/  OnePage Active Class
		/------------------------------------------------------*/
		function onPageNav(switchName) {
			const navSwitch = $(switchName);
			const deductHeight = 60;
			let navArr = [];

			navSwitch.each(function (i) {
				let navSwitchHref = $(this).attr("href");
				let tgtOff = $(navSwitchHref).offset().top - deductHeight;
				navArr.push([]);
				navArr[i].switch = $(this);
				navArr[i].tgtOff = tgtOff;
			});
			//        console.log(navArr);
			$(window).scroll(function () {
				for (let i = 0; i < navArr.length; i++) {
					let scroll = $(window).scrollTop();
					let tgtKey = navArr[i];
					let tgtSwitch = tgtKey.switch;
					let tgtOff = tgtKey.tgtOff;
					if (scroll >= tgtOff) {
						navSwitch.parent().removeClass("is-current");
						tgtSwitch.parent().addClass("is-current");
					} else {
						tgtSwitch.parent().removeClass("is-current");
					}
				}
			});
		}
		$(window).on("load resize", function () {
			onPageNav(".side-navbar a");
		});

		$(".header-menu nav ul").onePageNav({
			// currentClass: "current-menu-ancestor",
			changeHash: false,
			easing: "swing",
		});
		$(".header-button .tj-btn-primary").onePageNav({
			// currentClass: "current-menu-ancestor",
			changeHash: false,
			easing: "swing",
		});

		/*------------------------------------------------------
		/  Portfolio Filter
		/------------------------------------------------------*/
		// var $grid = $(".portfolio-box").isotope({
		// 	// options
		// 	masonry: {
		// 		columnWidth: ".portfolio-box .portfolio-sizer",
		// 		gutter: ".portfolio-box .gutter-sizer",
		// 	},
		// 	itemSelector: ".portfolio-box .portfolio-item",
		// 	percentPosition: true,
		// });

		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			$(".filter-button-group button").removeClass("active");
			$(this).addClass("active");

			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		/*------------------------------------------------------
		/  Portfolio Gallery Carousel
		/------------------------------------------------------*/
		$(".portfolio_gallery.owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			lazyLoad: true,
			center: true,
			// autoWidth: true,
			autoplayHoverPause: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 800,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					margin: 0,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
			},
		});

		/*------------------------------------------------------
		/ Testimonial Carousel
		/------------------------------------------------------*/
		$(".testimonial-carousel.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});

		/*------------------------------------------------------

		/ Useful Carousel
		/------------------------------------------------------*/

		// Инициализация слайдера в топе главной страницы
		const InitUsefulSlider = {
			defaultsOptions: {
				sliderWrapper: $('.useful-slider-wrapper')
			},
			init: function (options) {
				var options = $.extend(this.defaultsOptions, options)
				const sliderContainer = options.sliderWrapper.find('.useful-slider-contaner'),
					PrevArrow = options.sliderWrapper.find('.swiper-arrow.swiper-arrow-prev'),
					NextArrow = options.sliderWrapper.find('.swiper-arrow.swiper-arrow-next'),
					sliderPagination = options.sliderWrapper.find('.swiper-pagination')

				let swiper = new Swiper(sliderContainer, {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 30,
					speed: 1000,
					// lazy: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					touchReleaseOnEdges: true,
					loop: true,
					grabCursor: true,
					// effect: 'fade',
					// fadeEffect: {
					// 	crossFade: true
					// },
					pagination: {
						el: sliderPagination,
						type: "bullets",
						// renderCustom: function (swiper, current, total) {
						// 	// return current + ' of ' + total;
						// 	current = current < 10
						// 		? '0' + current
						// 		: current
						// 	total = total < 10
						// 		? '0' + total
						// 		: total
						// 	return '<span class="current">' + current + '</span>' +
						// 		' <span class="divider">/</span> ' +
						// 		'<span class="all">' + total + '</span>';
						// }
					},

					navigation: {
						nextEl: NextArrow,
						prevEl: PrevArrow,
					},
					breakpoints: {
						1199: {
							slidesPerView: 2,
							slidesPerGroup: 2,
						},
						767: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 15,
						},
					},
					/* autoplay: {
						delay: 5000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}, */
				})
			}
		}

		if ($('.useful-slider-contaner').length) {
			InitUsefulSlider.init()
		}
		// ------------------------------------

		// Инициализация бибилиотеки валидности номера телефона //
		function InitMaskPhone() {
			if ($(".input-phone").length > 0) {
				$(".input-phone").inputmask({
					mask: "+7 999 999 99 99",
				});
			}
		}
		//----------------------//
		InitMaskPhone();
		/*------------------------------------------------------
		
		/ Post Gallery Carousel
		/------------------------------------------------------*/
		$(".tj-post__gallery.owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			navText: [
				'<i class="fal fa-arrow-left"></i>',
				'<i class="fal fa-arrow-right"></i>',
			],
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3000,
		});

		/*------------------------------------------------------
		/  Nice Select
		/------------------------------------------------------*/
		$("select").niceSelect();

		/*------------------------------------------------------
		/  ALL Popup
		/------------------------------------------------------*/
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});


		let ValidateEmail = function (email) {
			// console.log(email.value)
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if (reg.test(email.val()) == false) {
				return false
			}
			else return true
		}
		// Инициадизация отправки формы
		const Forms = {
			defaultsOptions: {
				FormsElems: $('.form-default.--index')
			},

			submit: function (options) {
				var options = $.extend(this.defaultsOptions, options)
				// console.log(options)
				options.FormsElems.on('submit', function (e) {
					e.preventDefault()
					let EditInputWrapper = function (input, invalidText) {
						if (!input.closest('.form_group.invalid').length) {
							var ItemInputWrapper = input.closest('.form_group')
							ItemInputWrapper.addClass('invalid')
							if (invalidText) {
								var InvalidText = "<span class='invalid-text'>" + invalidText + "</span>"
								$(InvalidText).appendTo(ItemInputWrapper)
							}
						}
					}

					// console.log('submit')
					let $this = $(this),
						InvalidCount = 0,
						AllRequiredInputs = $this.find('input[type="text"]')
					// console.log(AllRequiredInputs)

					$.each(AllRequiredInputs, function (i, input) {
						// console.log(input)
						if ($(input).val() == '') {
							EditInputWrapper($(input), 'Заполните поле')
							InvalidCount += 1
						}
						else {
							if ($(input).hasClass('input-phone') && !$(input).inputmask("isComplete")) {
								EditInputWrapper($(input), 'Введите корректный номер')
								InvalidCount += 1
							}
							if ($(input).hasClass('input-mail') && !ValidateEmail($(input))) {
								EditInputWrapper($(input), 'Введите корректный email')
								InvalidCount += 1
							}
						}
					})

					if (InvalidCount == 0) {
						const formData = new FormData(),
							textarea = $this.find('textarea')
						if (textarea.val() != '')
							AllRequiredInputs = AllRequiredInputs.add(textarea)
						$.each(AllRequiredInputs, function () {
							let $thisVal = this.value
							if (this.getAttribute('name') == 'input-phone') {
								$thisVal = $thisVal.replace(/\s+/g, '')
							}
							formData.append(this.getAttribute('name'), $thisVal)
						})
						// formData.append('form-type', $this.attr('data-type'))
						for (let [name, value] of formData) {
							console.log(`${name} = ${value}`)
							// alert(`${name} = ${value}`); // key1=value1, потом key2=value2
						}

						// Ajax-запрос тут можно написать
						const SuccessWrapper = "<div class='request-success-wrapper'></div>"
						$(SuccessWrapper).insertAfter($this)
						const RequestSuccess = $this.siblings('.request-success-wrapper'),
							$thisFormHeight = $this.innerHeight()

						let formSend = true  // Переменная для хранения информации успешности отправки формы.

						formSend = true
							? RequestSuccess.html('Ваша форма успешно отправлена!<br>В ближайщее время мы свяжемся с вами.')
							: RequestSuccess.html('При отправке формы возникла ошибка! Попробуйте снова после перезагрузки страницы')
						if (formSend == 'robot')
							RequestSuccess.html('Вы не прошли проверку на робота! Попробуйте снова после перезагрузки страницы')
						// console.log(RequestSuccess)
						RequestSuccess.fadeIn({
							start: function () {
								if (docWidth < 1200)
									window.scrollTo(0, ($this.closest('.contact-form-box ').offset().top - $('.header-sticky').innerHeight()))
								$this.hide().remove()
								if (docWidth >= 1200) {
									$(this).css({
										'height': $thisFormHeight + 'px',
									})
								}
								else {
									$(this).css({
										'height': '',
									})
								}
							},
						})
					}
					// e.preventDefault()
				})
				this.events(options.FormsElems)
			},
			events: function (forms) {
				// Функционал изменения input
				forms.on('input change', 'input[type="text"], .form_group textarea', function (e) {
					var $this = $(this),
						$thisInputWrapper = $this.closest('.form_group')
					$thisInputWrapper.find('.invalid-text').remove()
					$thisInputWrapper.removeClass('invalid')

					$this.val() != ''
						? $this.addClass('active')
						: $this.removeClass('active')
				})
				forms.on('change', '.form_group select', function (e) {
					const $this = $(this)
					$this.prop('selectedIndex') != 0
						? $this.addClass('active')
						: $this.removeClass('active')
				})
			}
		}

		if ($('.form-default.--index').length) {
			Forms.submit()
		}
		//------------------------------------


		function EditRadiButtonAnother(texarea_elem) {
			const ThisInputWrapper = texarea_elem.closest('.form-input_wrapper'),
				AnotherInputWrapper = ThisInputWrapper.prev('.form-input_wrapper')
			if (texarea_elem.val() != '')
				AnotherInputWrapper.find('input').prop('checked', true)
			// : AnotherInputWrapper.find('input').prop('checked', false)

		}

		$('body').on('change input', '.form-question-inner textarea', function () {
			const $this = $(this)
			EditRadiButtonAnother($this)
		})

		$('body').on('click', '.form-default.--survey .form-clear', function (e) {
			e.preventDefault()
			const $this = $(this),
				form = $this.closest('.form-default.--survey')
			form.find('input').prop('checked', false)
			form.find('textarea').val('')
			form.find('select').val('')
			form.find('select').niceSelect('update');
			// $('.nice-select')
		})
	}); // end ready

	let docWidth = document.body.clientWidth

	$(window).on('resize', function () {
		docWidth = document.body.clientWidth
	})

	$(window).on("load", function () {
		/*------------------------------------------------------
		/  WoW Js
		/------------------------------------------------------*/
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		/*------------------------------------------------------
		/  Preloader
		/------------------------------------------------------*/
		const svg = document.getElementById("preloaderSvg");
		const tl = gsap.timeline();
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		tl.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		}).to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
		tl.to(".preloader", {
			y: -1500,
		});
		tl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		/*------------------------------------------------------
		/  Sidebar Hover BG Color
		/------------------------------------------------------*/
		if ($(".side-navbar").length > 0) {
			function sidebar_animation() {
				var active_bg = $(".side-navbar ul .active-bg");

				$(".side-navbar ul li").on("mouseenter", function () {
					var element = $(this);
					activeSidebar(active_bg, element);
				});

				$(".side-navbar ul").on("mouseleave", function () {
					var element = $(".side-navbar ul li.is-current");
					activeSidebar(active_bg, element);
					element.closest("li").siblings().removeClass("mleave");
				});

				// Use MutationObserver to detect changes in the is-current class
				var observer = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						if (
							mutation.attributeName === "class" &&
							mutation.target.classList.contains("is-current")
						) {
							var element = $(".side-navbar ul li.is-current");
							activeSidebar(active_bg, element);
						}
					});
				});

				observer.observe(document.querySelector(".side-navbar ul"), {
					attributes: true,
					subtree: true,
				});

				// Initial setup
				var initialElement = $(".side-navbar ul li.is-current");
				activeSidebar(active_bg, initialElement);
			}

			sidebar_animation();

			function activeSidebar(active_bg, e) {
				if (!e.length) {
					return false;
				}
				var topOff = e.offset().top;
				var height = e.outerHeight();
				var menuTop = $(".side-navbar ul").offset().top;
				e.closest("li").removeClass("mleave");
				e.closest("li").siblings().addClass("mleave");
				active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
			}
		}

		/*------------------------------------------------------
		/  Services Hover BG
		/------------------------------------------------------*/
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".services-widget .service-item").on("click", function () {
			$(".services-widget .service-item").removeClass("current");
			$(this).addClass("current");
		});

		/*------------------------------------------------------
		/  Portfolio Filter BG Color
		/------------------------------------------------------*/
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.closest("button").removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		/*------------------------------------------------------
		/  Funfact
		/------------------------------------------------------*/
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}
	});
})(jQuery);
