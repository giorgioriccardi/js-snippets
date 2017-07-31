/**
 * @credits
 * console.info("Giorgio Riccardi Creations");
 * console.info('https://github.com/giorgioriccardi');
 *
 */

// VARIOUS SNIPPETS

jQuery(document).ready(function($) {


/***************************************************
****************************************************
****************************************************/
// MIKE.L

    $('.filters select').on('change', function() {
        $(this).parents('form').submit();
    });

    $('.acf-map').each(function() {

        // render_map( $(this) );

    });

    (function() {
        // toggle menu
        var menu = $('.menu-primary');
        var $win = $(window);
        var menuToggle = $('.menu-toggle');
        var header = $('.site-header');
        var $offset = $win.scrollTop();

        menuToggle.on('click', function(event) {
            event.preventDefault();

            header.toggleClass('menu-visible')
            menu.toggleClass('menu-primary--visible');
        });


        $win.on('resize', function(event) {
            event.preventDefault();
            // Act on the event
            if ($win.width() > 640) {
                menu.removeClass('menu-primary--visible');
            }
        });

    })();

    var toggleIcon = function() {

        var toggles = document.querySelectorAll(".c-hamburger");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        }

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function(e) {
                e.preventDefault();
                if (this.classList.contains("is-active") === true) {
                    this.classList.remove("is-active");
                } else {
                    this.classList.add("is-active");
                }
            });
        }
    };

    toggleIcon();

    // var parallax = function() {

    // 	var slowScroller = $('.scroller');
    // 	var scrolled = $(window).scrollTop();
    // 	//console.log(scrolled);
    // 	slowScroller.css('top', (150+(scrolled*0.1)) + 'px'),
    // 	slowScroller.css('opacity', (1 - (scrolled / 1200) ) );
    // 	console.log('log');

    // };
    // $(window).on('scroll', function(event) {
    // 	parallax();
    // });

    var scrollChange = function() {
        var $win = $(window);
        // console.log('something');
        $win.on('scroll', function() {

            var $offset = $win.scrollTop();
            // console.log($offset);

            if ($offset > 200) {
                $('.site-header').addClass('scrolled');
                $('.menu-toggle').addClass('scrolled');
            } else {
                $('.site-header').removeClass('scrolled');
                $('.menu-toggle').removeClass('scrolled');
            }

        });
    };

    scrollChange();

// end MIKE L.


/***************************************************
****************************************************
****************************************************/
// GIORGIORICCARDI.COM

    // contact form focus
    (function() {

        var inputs = $('.wpcf7-form label');

        inputs.each(function(index, el) {

            var input = $(this).find('input, textarea');
            var label = $(this).find('.label');

            input.on('focus', function(event) {
                // event.preventDefault();

                label.addClass('focused');
            });

            input.on('blur', function(event) {
                // event.preventDefault();
                var val = $(this).val();

                if (val == '') {
                    label.removeClass('focused');
                }
            });

        });

    })() // end contact form focus



    // this does not work
    // if ( $('.slide-title').length && windowWidth > 768 ) {
    // this doesn't either!    	
    // if ( ($('.slide-title').length) && (windowWidth > 768) ) {
    // 	$.('.entry-title').hide();
    // }

    // this removes the title even if there is no slider involved, not good!
    // if ( windowWidth > 768 ) {
    //     $('.slide-title').length;    
    //     $('.entry-title').hide();   
    // }

    // https://learn.jquery.com/using-jquery-core/faq/how-do-i-test-whether-an-element-exists

// end of GIORGIORICCARDI.COM


/***************************************************
****************************************************
****************************************************/
// daviespark.com 02/2017

    // to create a css button on thei plain links "Click here"

    // grc 01/2017

    // $('a').filter(function() {
    //     return this.innerHTML == 'Click here';
    // }).addClass('link_button');

    // grc 02/2017
    // trim() empty spaces

    // $('a').filter(function() {
    //     var str = "Click here";
    //     var newStr = $.trim(str);
    //     var cleanHTML = $.trim(this.innerHTML);
    //     return cleanHTML == newStr;
    // }).addClass('link_button');

    // regular expression /^[^a-z]*$/
    // remove all empty spaces and match a string Clickhere

    // $('a').filter(function() {
    //     return this.innerHTML
    //     .replace(/\s+/g, "") == 'Clickhere';
    // }).addClass('link_button');

    $('a').filter(function() {
        return this.innerHTML
            .replace(/\s+/g, "").toLowerCase() == 'clickhere';
    }).addClass('link_button');

// endo of daviespark.com



}); // end document.ready 
// end of VARIOUS SNIPPETS


/***************************************************
****************************************************
****************************************************/
// IUOE115.CA

jQuery(document).ready(function($) {

    console.info("Giorgio Riccardi Creations");
    console.info('https://github.com/giorgioriccardi');


    ////////////////////////////////////////////////////////////
    

    // we add a .gradient class that we can style with animation class:

    // on home page, when sticky is disabled
    $('.sticky-disabled, .menu-item').hover(function(){     
        $('.tc-header').addClass('gradient-black');    
    },     
    function(){    
        $('.tc-header').removeClass('gradient-black');     
    });

    // on any other page when sticky is enabled
    // $('.sticky-enabled, .nav .menu-item').hover(function(){  
    $('.sticky-enabled, .menu-item .dropdown-menu').hover(function(){    
        $('.tc-header').addClass('gradient-white-dropdown');    
    },     
    function(){    
        $('.tc-header').removeClass('gradient-white-dropdown');     
    });
    // end of .gradient class

    
    ////////////////////////////////////////////////////////////


    // remove page title when slider title is present
    // if ( $( '.slide-title' ).length ) {    
    //     $('.entry-title').hide();   
    // }

    // below 768px no slider is displayed
    var windowWidth = $(window).width();

    if ( ( $( '.slide-title' ).length ) && windowWidth > 768 ) {    
        $('.entry-title').hide();   
    }


    ////////////////////////////////////////////////////////////


    // disable links on pages with no landing content or with a class .no-landing
    $(".no-landing").children("a").attr('href', "javascript:void(0)");
    // or for targeted links e.g. breadcrumb trail
    $("a[href='http://www.iuoe115.ca/the-latest/'], a[href='http://www.iuoe115.ca/training/'], a[href='http://www.iuoe115.ca/membership/'], a[href='http://www.iuoe115.ca/about-us/']")
    .attr('href', "javascript:void(0)");


    ////////////////////////////////////////////////////////////


    //  Contact Form 7 success (only) popup in modal (lightbox)

    // jQuery(".wpcf7-submit").click(function(event) { //IF THE SUBMIT IS PRESSED
    //     jQuery(document).ajaxComplete(function() { //AJAX RESPONSES
    //         alert(jQuery(".wpcf7-response-output").html()); //ALERTS THE OUTPUT
    //     });
    // }); // removed because it's annoying!


    // redirecting agreement thank-you page

    // (function() {

    //  var count = 5;
    //  var redirect = "http://www.iuoe.ca/";

    //  function countDown() {
    //      var timer = document.getElementById("timer");
    //      if (count > 0) {
    //          count--;
    //          timer.innerHTML = "" + count + "";
    //          setTimeout("countDown()", 1000);
    //      } else {
    //          window.location.href = redirect;
    //      }
    //  }

    // })();

});  // end document.ready // IUOE115.CA



/***************************************************
****************************************************
****************************************************/
// BOWENISLAND.PET

// GRC disable external links on services

var g;

var changeLinkAttribute = document.getElementById('post-105').getElementsByTagName('a');

for (var g = 0; g < changeLinkAttribute.length; g++) {
    changeLinkAttribute[g].removeAttribute('target', '_blank');
    changeLinkAttribute[g].setAttribute('target', '_self');
}


// remove all the _blank targets from all links... too much intrusive but with a modern JS approach

// Array.from(document.querySelectorAll('a[target="_blank"]')).forEach(link => link.removeAttribute('target'));

// http://stackoverflow.com/questions/10098898/remove-all-target-blank-from-links
// the above solution won't work for links that requires to be external like credits in the footer
// it would require an extra step like the one at the bottom


// var s;

// var keepLinkAttribute = document.getElementById('footer').getElementsByTagName('a');

// for (var s = 0; s < keepLinkAttribute.length; s++) {
//  keepLinkAttribute[s].removeAttribute('target', '_self');
//  keepLinkAttribute[s].setAttribute('target', '_blank');
// }

// end of BOWENISLAND.PET



/***************************************************
****************************************************
****************************************************/

// "OPEN EXTERNAL LINKS IN A NEW TAB"

jQuery(document).ready(function($) {

    /****************************************************/

    // CSS TRICKS

    // this solution from css-tricks works when clicked!
    // It triggers on the event, so no flexibility to add a class with .external-link for example

    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if(!a.test(this.href)) {
           $(this).click(function(event) {
               event.preventDefault();
               event.stopPropagation();
               window.open(this.href, '_blank');
           });
       }
    });

    // plain javascript

    function externalLinks() {
        var anchors = document.querySelectorAll( 'a' );
        for( var i = 0; i < anchors.length; i++ ) {
            if ( anchors[i].hostname !== window.location.hostname ) {
                anchors[i].setAttribute( 'target', '_blank' );
            }
        }
    }
    externalLinks();

    // https://css-tricks.com/snippets/jquery/open-external-links-in-new-window/


    /****************************************************/

    // BACCHEDIGAIA.IT

    // inspired by CUSTOMIZR solution, but implemented by GRC

    /*
    * @return boolean
    */
    var _is_external = function( _href  ) {
    //gets main domain and extension, no matter if it is a n level sub domain
    //works also with localhost or numeric urls
    var _thisHref = $.trim( _href ),
        _main_domain = (location.host).split('.').slice(-2).join('.'),
        _reg = new RegExp( _main_domain );

    if ( _thisHref !== '' && _thisHref != '#' && _isValidURL( _thisHref ) )
      return ! _reg.test( _thisHref );
    return;
    };

    /*
    * @return boolean
    */
    var _isValidURL = function(_url){
        var _pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return _pattern.test( _url );
    };

    $('a').each( function() {
      var _thisHref = $.trim( $(this).attr('href'));
      if( _is_external( _thisHref ) && 'IMG' != $(this).children().first().prop("tagName") ) {
        $(this)
        	.attr({ target: "_blank" })
        	.addClass( "external-link" );
      }
    });


    // ADDING EXTERNAL ICON via CSS

    // .external-link::after {
    //   font-family: FontAwesome;
    //   /* content: "\f14c"; */ /* squared icon */
    //   content:" \f08e"
    // }


});  // end document.ready