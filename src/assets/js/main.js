var MINOVATE = MINOVATE || {};

$(function() {




  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // global inicialization functions
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  MINOVATE.global = {

    init: function() {
      MINOVATE.global.deviceSize();
      MINOVATE.global.layout();
      MINOVATE.global.animsition();
    },

    // device identification function
    deviceSize: function(){
			var jRes = jRespond([
				{
					label: 'smallest',
					enter: 0,
					exit: 479
				},{
					label: 'handheld',
					enter: 480,
					exit: 767
				},{
					label: 'tablet',
					enter: 768,
					exit: 991
				},{
					label: 'laptop',
					enter: 992,
					exit: 1199
				},{
					label: 'desktop',
					enter: 1200,
					exit: 10000
				}
			]);
			jRes.addFunc([
				{
					breakpoint: 'desktop',
					enter: function() { $body.addClass('device-lg'); },
					exit: function() { $body.removeClass('device-lg'); }
				},{
					breakpoint: 'laptop',
					enter: function() { $body.addClass('device-md'); },
					exit: function() { $body.removeClass('device-md'); }
				},{
					breakpoint: 'tablet',
					enter: function() { $body.addClass('device-sm'); },
					exit: function() { $body.removeClass('device-sm'); }
				},{
					breakpoint: 'handheld',
					enter: function() { $body.addClass('device-xs'); },
					exit: function() { $body.removeClass('device-xs'); }
				},{
					breakpoint: 'smallest',
					enter: function() { $body.addClass('device-xxs'); },
					exit: function() { $body.removeClass('device-xxs'); }
				}
			]);
		},

    layout: function() {
      var defaultHeaderScheme = 'scheme-default',
          defaultNavbarScheme = 'scheme-default',
          defaultBrandingScheme = 'scheme-default',
          defaultColorScheme = 'default-scheme-color',
          defaultHeaderPosition = 'header-fixed',
          defaultNavbarPosition = 'aside-fixed',
          defaultRightbarVisibility = 'rightbar-hidden',
          defaultAppClasses = 'scheme-default default-scheme-color header-fixed aside-fixed rightbar-hidden';

      $body.addClass(defaultAppClasses);
      $header.addClass(defaultHeaderScheme);
      $branding.addClass(defaultBrandingScheme);
      $sidebar.addClass(defaultNavbarScheme).addClass(defaultNavbarPosition);

      $headerSchemeEl.on('click', function($event) {
        var scheme = $(this).data('scheme');

        $body.removeClass(defaultHeaderScheme).addClass(scheme);
        $header.removeClass(defaultHeaderScheme).addClass(scheme);
        defaultHeaderScheme = scheme;
        $event.stopPropagation();
      });

      $brandingSchemeEl.on('click', function($event) {
        var scheme = $(this).data('scheme');

        $branding.removeClass(defaultBrandingScheme).addClass(scheme);
        defaultBrandingScheme = scheme;
        $event.stopPropagation();
      });

      $sidebarSchemeEl.on('click', function($event) {
        var scheme = $(this).data('scheme');

        $body.removeClass(defaultNavbarScheme).addClass(scheme);
        $sidebar.removeClass(defaultNavbarScheme).addClass(scheme);
        defaultNavbarScheme = scheme;
        $event.stopPropagation();
      });

      $colorSchemeEl.on('click', function($event) {
        var scheme = $(this).data('scheme');

        $body.removeClass(defaultColorScheme).addClass(scheme);
        defaultColorScheme = scheme;
        $event.stopPropagation();
      });

      $fixedHeaderEl.change(function() {
        if ($body.hasClass('header-fixed')) {
          $body.removeClass('header-fixed').addClass('header-static');
        } else {
          $body.removeClass('header-static').addClass('header-fixed');
        }
      });
      $fixedHeaderEl.parent().on('click', function($event) {
        $event.stopPropagation();
      });

      $fixedAsideEl.change(function() {
        if ($body.hasClass('aside-fixed')) {
          $body.removeClass('aside-fixed').addClass('aside-static');
          $sidebar.removeClass('aside-fixed').addClass('aside-static');
        } else {
          $body.removeClass('aside-static').addClass('aside-fixed');
          $sidebar.removeClass('aside-static').addClass('aside-fixed');
        }
      });
      $fixedAsideEl.parent().on('click', function($event) {
        $event.stopPropagation();
      });

      $toggleRightbarEl.on('click', function() {
        if ($body.hasClass('rightbar-hidden')) {
          $body.removeClass('rightbar-hidden').addClass('rightbar-show');
        } else {
          $body.removeClass('rightbar-show').addClass('rightbar-hidden');
        }
      });

      if ($app.hasClass('boxed-layout')){
        $app.parent().addClass('boxed-layout');
      }

      if ($app.hasClass('sidebar-offcanvas')){
        $app.parent().addClass('sidebar-offcanvas');
      }

      if ($app.hasClass('hz-menu')){
        $app.parent().addClass('hz-menu');
      }

      if ($app.hasClass('rtl')){
        $app.parent().addClass('rtl');
      }

    },

    // initialize animsition
    animsition: function() {
      $wrap.animsition({
        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1500,
        outDuration           :    800,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          : [ 'animation-duration',
          '-webkit-animation-duration',
          '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay               :   false,
        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
      });
    }

  };






  //!!!!!!!!!!!!!!!!!!!!!!!!!
  // header section functions
  //!!!!!!!!!!!!!!!!!!!!!!!!!

  MINOVATE.header = {

    init: function() {

    }


  };






  //!!!!!!!!!!!!!!!!!!!!!!!!!
  // navbar section functions
  //!!!!!!!!!!!!!!!!!!!!!!!!!

  MINOVATE.navbar = {

    init: function() {
      MINOVATE.navbar.menu();
      MINOVATE.navbar.ripple();
      MINOVATE.navbar.removeRipple();
      MINOVATE.navbar.collapse();
      MINOVATE.navbar.offcanvas();
    },

    menu: function(){
      if( $dropdowns.length > 0 ) {

        $dropdowns.addClass('dropdown');

        var $submenus = $dropdowns.find('ul >.dropdown');
        $submenus.addClass('submenu');

        $a.append('<i class="fa fa-plus"></i>');

        $a.on('click', function(event) {
          if ($app.hasClass('sidebar-sm') || $app.hasClass('sidebar-xs') || $app.hasClass('hz-menu')) {
            return false;
          }

          var $this = $(this),
              $parent = $this.parent('li'),
              $openSubmenu = $('.submenu.open');

          if (!$parent.hasClass('submenu')) {
            $dropdowns.not($parent).removeClass('open').find('ul').slideUp();
          }

          $openSubmenu.not($this.parents('.submenu')).removeClass('open').find('ul').slideUp();
          $parent.toggleClass('open').find('>ul').stop().slideToggle();
          event.preventDefault();
        });

        $dropdowns.on('mouseenter', function() {
          $sidebar.addClass('dropdown-open');
          $controls.addClass('dropdown-open');
        });

        $dropdowns.on('mouseleave', function() {
          $sidebar.removeClass('dropdown-open');
          $controls.removeClass('dropdown-open');
        });

        $notDropdownsLinks.on('click', function() {
          $dropdowns.removeClass('open').find('ul').slideUp();
        });

        var $activeDropdown = $('.dropdown>ul>.active').parent();

        $activeDropdown.css('display', 'block');
      }
    },

    ripple: function() {
      var parent, ink, d, x, y;

      $navigation.find('>li>a').click(function(e){
        parent = $(this).parent();

        if(parent.find('.ink').length === 0) {
          parent.prepend('<span class="ink"></span>');
        }

        ink = parent.find('.ink');
        //incase of quick double clicks stop the previous animation
        ink.removeClass('animate');

        //set size of .ink
        if(!ink.height() && !ink.width())
        {
          //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
          d = Math.max(parent.outerWidth(), parent.outerHeight());
          ink.css({height: d, width: d});
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //set the position and add class .animate
        ink.css({top: y+'px', left: x+'px'}).addClass('animate');

        setTimeout(function(){
          $('.ink').remove();
        }, 600);
      });
    },

    removeRipple: function(){
      $sidebar.find('.ink').remove();
    },

    collapse: function(){
      $collapseSidebarEl.on('click', function(e) {
        if ($app.hasClass('sidebar-sm')) {
          $app.removeClass('sidebar-sm').addClass('sidebar-xs');
        }
        else if ($app.hasClass('sidebar-xs')) {
          $app.removeClass('sidebar-xs');
        }
        else {
          $app.addClass('sidebar-sm');
        }

        $app.removeClass('sidebar-sm-forced sidebar-xs-forced');
        $app.parent().removeClass('sidebar-sm sidebar-xs');
        MINOVATE.navbar.removeRipple;
        //$window.trigger('resize');
        e.preventDefault();
      });
    },

    offcanvas: function() {
      $offcanvasToggleEl.on('click', function(e) {
        if ($app.hasClass('offcanvas-opened')) {
          $app.removeClass('offcanvas-opened');
        } else {
          $app.addClass('offcanvas-opened');
        }
        e.preventDefault();
      });
    }


  };
  



  //!!!!!!!!!!!!!!!!
  // tiles functions
  //!!!!!!!!!!!!!!!!

  MINOVATE.tiles = {

    init: function() {
      MINOVATE.tiles.toggle();
      MINOVATE.tiles.refresh();
      MINOVATE.tiles.fullscreen();
      MINOVATE.tiles.close();
    },

    toggle: function() {
      $tileToggleEl.on('click', function(){
        var element = $(this);
        var tile = element.parents('.tile');

        tile.toggleClass('collapsed');
        tile.children().not('.tile-header').slideToggle(150);
      });
    },

    refresh: function() {
      $tileRefreshEl.on('click', function(){
        var element = $(this);
        var tile = element.parents('.tile');
        var dropdown = element.parents('.dropdown');

        tile.addClass('refreshing');
        dropdown.trigger('click');

        var t = setTimeout( function(){
          tile.removeClass('refreshing');
        }, 3000 );
      });
    },

    fullscreen: function() {
      $tileFullscreenEl.on('click', function(){
        var element = $(this);
        var tile = element.parents('.tile');
        var dropdown = element.parents('.dropdown');

        screenfull.toggle(tile[0]);
        dropdown.trigger('click');
      });

      if ($tileFullscreenEl.length > 0) {
        $(document).on(screenfull.raw.fullscreenchange, function () {
          var element = $(screenfull.element);
          if (screenfull.isFullscreen) {
            element.addClass('isInFullScreen');
          } else {
            $('.tile.isInFullScreen').removeClass('isInFullScreen');
          }
        });
      }
    },

    close: function() {
      $tileCloseEl.on('click', function(){
        var element = $(this);
        var tile = element.parents('.tile');

        tile.addClass('closed').fadeOut();
      });
    }

  };



  //!!!!!!!!!!!!!!!!
  // extra functions
  //!!!!!!!!!!!!!!!!

  MINOVATE.extra = {

    init: function() {
      MINOVATE.extra.sparklineChart();
      MINOVATE.extra.slimScroll();
      MINOVATE.extra.daterangePicker();
      MINOVATE.extra.easypiechart();
      MINOVATE.extra.toggleClass();
      MINOVATE.extra.colorpicker();
      MINOVATE.extra.touchspin();
      MINOVATE.extra.datepicker();
      MINOVATE.extra.animateProgress();
      MINOVATE.extra.counter();
      MINOVATE.extra.popover();
      MINOVATE.extra.tooltip();
      MINOVATE.extra.splash();
      MINOVATE.extra.lightbox();
    },

    //initialize sparkline chart on elements
    sparklineChart: function(){

      if( $sparklineEl.length > 0 ){
        $sparklineEl.each(function() {
          var element = $(this);

          element.sparkline('html', { enableTagOptions: true });
        });
      }

    },

    //initialize slimscroll on elements
    slimScroll: function(){

      if( $slimScrollEl.length > 0 ){
        $slimScrollEl.each(function() {
          var element = $(this);

          element.slimScroll({height: '100%'});
        });
      }

    },

    //initialize date range picker on elements
    daterangePicker: function() {

      if ($pickDateEl.length > 0) {
        $pickDateEl.each(function() {
          var element = $(this);

          element.find('span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

          element.daterangepicker({
            format: 'MM/DD/YYYY',
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2015',
            dateLimit: { days: 60 },
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: false,
            timePickerIncrement: 1,
            timePicker12Hour: true,
            ranges: {
              'Today': [moment(), moment()],
              'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            drops: 'down',
            buttonClasses: ['btn', 'btn-sm'],
            applyClass: 'btn-success',
            cancelClass: 'btn-default',
            separator: ' to ',
            locale: {
              applyLabel: 'Submit',
              cancelLabel: 'Cancel',
              fromLabel: 'From',
              toLabel: 'To',
              customRangeLabel: 'Custom',
              daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
              monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              firstDay: 1
            }
          }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
            element.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          });

        });
      }

    },

    easypiechart: function() {
      if ($easypiechartEl.length > 0) {
        $easypiechartEl.each(function() {
          var element = $(this);
          element.easyPieChart({
            onStart: function(value) {
              if (element.hasClass('animate')) {
                $(this.el).find('span').countTo({to: value});
              }
            }
          });
        });
      }
    },

    toggleClass: function() {
      $toggleClassEl.on('click', function(){
        var element = $(this),
            className = element.data('toggle'),
            type = element.data('type');

        if (type === 'radio') {
          element.parent().find('.'+className).removeClass(className);
        }

        if (element.hasClass(className)) {
          element.removeClass(className);
        } else {
          element.addClass(className);
        }
      });
    },

    colorpicker: function() {
      if ($colorPickerEl.length > 0) {
        $colorPickerEl.each(function() {
          var element = $(this);
          element.colorpicker();
        });
      }
    },

    touchspin: function() {
      if ($touchspinEl.length > 0) {
        $touchspinEl.each(function() {
          var element = $(this);
          element.TouchSpin();
        });
      }
    },

    datepicker: function() {
      if ($datepickerEl.length > 0) {
        $datepickerEl.each(function() {
          var element = $(this);
          var format = element.data('format')
          element.datetimepicker({
            format: format
          });
        });
      }
    },

    animateProgress: function() {
      if ($animateProgressEl.length > 0) {
        $animateProgressEl.each(function() {
          var element = $(this);
          var progress =  element.data('percentage');

          element.css('width', progress);
        });
      }
    },

    counter: function(){
			if ($counterEl.length > 0) {
        $counterEl.each(function() {
          var element = $(this);

          element.countTo();
        });
      }
		},

    popover: function() {
      $popoverEl = $('[data-toggle="popover"]');
      if ($popoverEl.length > 0) {
        $popoverEl.each(function() {
          var element = $(this);

          element.popover();
        });
      }
    },

    tooltip: function() {
      $tooltipEl = $('[data-toggle="tooltip"]');
      if ($tooltipEl.length > 0) {
        $tooltipEl.each(function() {
          var element = $(this);

          element.tooltip();
        });
      }
    },

    splash: function() {
      var options = "";
      var target = "";
      $splashEl.on('show.bs.modal', function (e) {
        options = e.relatedTarget.dataset.options;
        target = $(e.target);

        target.addClass(options);
        $body.addClass(options).addClass('splash');
      });
      $splashEl.on('hidden.bs.modal', function () {
        target.removeClass(options);
        $body.removeClass(options).removeClass('splash');
      });
    },

    //initialize magnificPopup lightbox
    lightbox: function(){
			var $lightboxImageEl = $('[data-lightbox="image"]'),
          $lightboxIframeEl = $('[data-lightbox="iframe"]'),
          $lightboxGalleryEl = $('[data-lightbox="gallery"]');

			if( $lightboxImageEl.length > 0 ) {
				$lightboxImageEl.magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					image: {
						verticalFit: true
					}
				});
			}

      if( $lightboxIframeEl.length > 0 ) {
				$lightboxIframeEl.magnificPopup({
					disableOn: 600,
					type: 'iframe',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			}

			if( $lightboxGalleryEl.length > 0 ) {
				$lightboxGalleryEl.each(function() {
					var element = $(this);

					if( element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone') ) {
						element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox','');
					}

					element.magnificPopup({
						delegate: 'a[data-lightbox="gallery-item"]',
						type: 'image',
						closeOnContentClick: true,
						closeBtnInside: false,
						fixedContentPos: true,
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						}
					});
				});
			}
		}

  };




  //!!!!!!!!!!!!!!!!!!!!
  // check mobile device
  //!!!!!!!!!!!!!!!!!!!!

  MINOVATE.isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (MINOVATE.isMobile.Android() || MINOVATE.isMobile.BlackBerry() || MINOVATE.isMobile.iOS() || MINOVATE.isMobile.Opera() || MINOVATE.isMobile.Windows());
    }
  };



  //!!!!!!!!!!!!!!!!!!!!!!!!!
  // initialize after resize
  //!!!!!!!!!!!!!!!!!!!!!!!!!

  MINOVATE.documentOnResize = {

		init: function(){

      var t = setTimeout( function(){

        MINOVATE.documentOnReady.setSidebar();
        MINOVATE.navbar.removeRipple();

			}, 500 );

		}

	};






  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // initialize when document ready
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  MINOVATE.documentOnReady = {

		init: function(){
      MINOVATE.global.init();
			MINOVATE.header.init();
      MINOVATE.navbar.init();
      MINOVATE.documentOnReady.windowscroll();
      MINOVATE.tiles.init();
      MINOVATE.extra.init();
      MINOVATE.documentOnReady.setSidebar();
		},

    // run on window scrolling

    windowscroll: function(){

			$window.on( 'scroll', function(){


			});
		},


    setSidebar: function() {

      width = $window.width();

      if (width < 992) {
        $app.addClass('sidebar-sm');
      } else {
        $app.removeClass('sidebar-sm sidebar-xs');
      }

      if (width < 768) {
        $app.removeClass('sidebar-sm').addClass('sidebar-xs');
      } else if (width > 992){
        $app.removeClass('sidebar-sm sidebar-xs');
      } else {
        $app.removeClass('sidebar-xs').addClass('sidebar-sm');
      }

      if ($app.hasClass('sidebar-sm-forced')) {
        $app.addClass('sidebar-sm');
      }

      if ($app.hasClass('sidebar-xs-forced')) {
        $app.addClass('sidebar-xs');
      }

    }

	};







  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // initialize when document load
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	MINOVATE.documentOnLoad = {

		init: function(){

		}

	};






  //!!!!!!!!!!!!!!!!!!!!!!!!!
  // global variables
  //!!!!!!!!!!!!!!!!!!!!!!!!!

  var $window = $(window),
      $body = $('body'),
      $header = $('#header'),
      $branding = $('#header .branding'),
      $sidebar = $('#sidebar'),
      $controls = $('#controls'),
      $app = $('.appWrapper'),
      $navigation = $('#navigation'),
      $sparklineEl = $('.sparklineChart'),
      $slimScrollEl = $('.slim-scroll'),
      $collapseSidebarEl = $('.collapse-sidebar'),
      $wrap = $('#wrap'),
      $offcanvasToggleEl = $('.offcanvas-toggle'),

      //navigation elements
      $dropdowns = $navigation.find('ul').parent('li'),
      $a = $dropdowns.children('a'),
      $notDropdowns = $navigation.children('li').not($dropdowns),
      $notDropdownsLinks = $notDropdowns.children('a'),
      // end of navuigation elements

      $headerSchemeEl = $('.color-schemes .header-scheme'),
      $brandingSchemeEl = $('.color-schemes .branding-scheme'),
      $sidebarSchemeEl = $('.color-schemes .sidebar-scheme'),
      $colorSchemeEl = $('.color-schemes .color-scheme'),
      $fixedHeaderEl = $('#fixed-header'),
      $fixedAsideEl = $('#fixed-aside'),
      $toggleRightbarEl = $('.toggle-right-sidebar'),
      $pickDateEl = $('.pickDate'),

      $tileEl = $('.tile'),
      $tileToggleEl = $('.tile .tile-toggle'),
      $tileRefreshEl = $('.tile .tile-refresh'),
      $tileFullscreenEl = $('.tile .tile-fullscreen'),
      $tileCloseEl = $('.tile .tile-close'),

      $easypiechartEl = $('.easypiechart'),
      $toggleClassEl = $('.toggle-class'),
      $colorPickerEl = $('.colorpicker'),
      $touchspinEl = $('.touchspin'),
      $datepickerEl = $('.datepicker'),
      $animateProgressEl = $('.animate-progress-bar'),
      $counterEl = $('.counter'),
      $splashEl = $('.splash');


  //!!!!!!!!!!!!!
  // initializing
  //!!!!!!!!!!!!!
  $(document).ready( MINOVATE.documentOnReady.init );
  $window.load( MINOVATE.documentOnLoad.init );
  $window.on( 'resize', MINOVATE.documentOnResize.init );

});












/////////////////////////home

            $(window).load(function(){
                // Initialize Statistics chart
                var data = [{
                    data: [[1,15],[2,40],[3,35],[4,39],[5,42],[6,50],[7,46],[8,49],[9,59],[10,60],[11,58],[12,74]],
                    label: 'Unique Visits',
                    points: {
                        show: true,
                        radius: 4
                    },
                    splines: {
                        show: true,
                        tension: 0.45,
                        lineWidth: 4,
                        fill: 0
                    }
                }, {
                    data: [[1,50],[2,80],[3,90],[4,85],[5,99],[6,125],[7,114],[8,96],[9,130],[10,145],[11,139],[12,160]],
                    label: 'Page Views',
                    bars: {
                        show: true,
                        barWidth: 0.6,
                        lineWidth: 0,
                        fillColor: { colors: [{ opacity: 0.3 }, { opacity: 0.8}] }
                    }
                }];

                var options = {
                    colors: ['#e05d6f','#61c8b8'],
                    series: {
                        shadowSize: 0
                    },
                    legend: {
                        backgroundOpacity: 0,
                        margin: -7,
                        position: 'ne',
                        noColumns: 2
                    },
                    xaxis: {
                        tickLength: 0,
                        font: {
                            color: '#fff'
                        },
                        position: 'bottom',
                        ticks: [
                            [ 1, 'JAN' ], [ 2, 'FEB' ], [ 3, 'MAR' ], [ 4, 'APR' ], [ 5, 'MAY' ], [ 6, 'JUN' ], [ 7, 'JUL' ], [ 8, 'AUG' ], [ 9, 'SEP' ], [ 10, 'OCT' ], [ 11, 'NOV' ], [ 12, 'DEC' ]
                        ]
                    },
                    yaxis: {
                        tickLength: 0,
                        font: {
                            color: '#fff'
                        }
                    },
                    grid: {
                        borderWidth: {
                            top: 0,
                            right: 0,
                            bottom: 1,
                            left: 1
                        },
                        borderColor: 'rgba(255,255,255,.3)',
                        margin:0,
                        minBorderMargin:0,
                        labelMargin:20,
                        hoverable: true,
                        clickable: true,
                        mouseActiveRadius:6
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: '%s: %y',
                        defaultTheme: false,
                        shifts: {
                            x: 0,
                            y: 20
                        }
                    }
                };

                var plot = $.plot($("#statistics-chart"), data, options);

                $(window).resize(function() {
                    // redraw the graph in the correctly sized div
                    plot.resize();
                    plot.setupGrid();
                    plot.draw();
                });
                // * Initialize Statistics chart

                //Initialize morris chart
                Morris.Donut({
                    element: 'browser-usage',
                    data: [
                        {label: 'Chrome', value: 25, color: '#00a3d8'},
                        {label: 'Safari', value: 20, color: '#2fbbe8'},
                        {label: 'Firefox', value: 15, color: '#72cae7'},
                        {label: 'Opera', value: 5, color: '#d9544f'},
                        {label: 'Internet Explorer', value: 10, color: '#ffc100'},
                        {label: 'Other', value: 25, color: '#1693A5'}
                    ],
                    resize: true
                });
                //*Initialize morris chart


                // Initialize owl carousels
                $('#todo-carousel, #feed-carousel, #notes-carousel').owlCarousel({
                    autoPlay: 5000,
                    stopOnHover: true,
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem : true,
                    responsive: true
                });

                $('#appointments-carousel').owlCarousel({
                    autoPlay: 5000,
                    stopOnHover: true,
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    navigation: true,
                    navigationText : ['<i class=\'fa fa-chevron-left\'></i>','<i class=\'fa fa-chevron-right\'></i>'],
                    singleItem : true
                });
                //* Initialize owl carousels


                // Initialize rickshaw chart
                var graph;

                var seriesData = [ [], []];
                var random = new Rickshaw.Fixtures.RandomData(50);

                for (var i = 0; i < 50; i++) {
                    random.addData(seriesData);
                }

                graph = new Rickshaw.Graph( {
                    element: document.querySelector("#realtime-rickshaw"),
                    renderer: 'area',
                    height: 133,
                    series: [{
                        name: 'Series 1',
                        color: 'steelblue',
                        data: seriesData[0]
                    }, {
                        name: 'Series 2',
                        color: 'lightblue',
                        data: seriesData[1]
                    }]
                });

                var hoverDetail = new Rickshaw.Graph.HoverDetail( {
                    graph: graph,
                });

                graph.render();

                setInterval( function() {
                    random.removeData(seriesData);
                    random.addData(seriesData);
                    graph.update();

                },1000);
                //* Initialize rickshaw chart

                //Initialize mini calendar datepicker
                $('#mini-calendar').datetimepicker({
                    inline: true
                });
                //*Initialize mini calendar datepicker


                //todo's
                $('.widget-todo .todo-list li .checkbox').on('change', function() {
                    var todo = $(this).parents('li');

                    if (todo.hasClass('completed')) {
                        todo.removeClass('completed');
                    } else {
                        todo.addClass('completed');
                    }
                });
                //* todo's


                //initialize datatable
                $('#project-progress').DataTable({
                    "aoColumnDefs": [
                      { 'bSortable': false, 'aTargets': [ "no-sort" ] }
                    ],
                });
                //*initialize datatable

                //load wysiwyg editor
                $('#summernote').summernote({
                    toolbar: [
                        //['style', ['style']], // no style button
                        ['style', ['bold', 'italic', 'underline', 'clear']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['height', ['height']],
                        //['insert', ['picture', 'link']], // no insert buttons
                        //['table', ['table']], // no table button
                        //['help', ['help']] //no help button
                    ],
                    height: 143   //set editable area's height
                });
                //*load wysiwyg editor
            });



