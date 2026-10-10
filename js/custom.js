(function($) {
    'use strict';

    /* Hide menu after click
    ----------------------------------------------*/


    /* Smooth scroll to section
    ----------------------------------------------*/
    $('a.scroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-70
                }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400);
                return false;
            }
        }
    });

    /* Team slideshow
    ----------------------------------------------*/
    // Article cards remain visible in a responsive grid.

    /* Testimonials slideshow
    ----------------------------------------------*/
    $("#testimonial-carousel").owlCarousel({
 
        autoPlay: false,
 
        singleItem: true,
        pagination : true,
        autoHeight: true
 
    });

    /* Tooltip
    ----------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Lightbox
    ----------------------------------------------*/
    $('.image-link').magnificPopup({
        type:'image'
    });

    /* Google map
    ----------------------------------------------*/
    $(".map").each(function(){
            
        var data_zoom = 17;
        
        if ($(this).attr("data-zoom") !== undefined) {
            data_zoom = parseInt($(this).attr("data-zoom"),10);
        }   
        
        $(this).gmap3({
            marker: {
                values: [{
                    address: $(this).attr("data-address"),
                    data: $(this).attr("data-address-details")
                }],
                options:{
                    draggable: false
                },
                events:{
                    click: function(marker, event, context){
                        var map = $(this).gmap3("get"),
                        infowindow = $(this).gmap3({get:{name:"infowindow"}});
                        if (infowindow){
                            infowindow.open(map, marker);
                            infowindow.setContent(context.data);
                        } else {
                            $(this).gmap3({
                                infowindow:{
                                    anchor:marker, 
                                    options:{content: context.data}
                                }
                            });
                        }
                    }
                }
            },
            map: {
                options: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: data_zoom,
                    scrollwheel: false
                }
            }
        });
        
    });
          
})(jQuery);


// Close the mobile menu after choosing a destination on either page layout.
jQuery('.navbar-nav a').on('click', function() {
    var menu = jQuery('.navbar-collapse');
    var collapse = menu.data('bs.collapse');
    if (collapse && collapse.transitioning) {
        menu.one('shown.bs.collapse', function() { menu.collapse('hide'); });
    } else {
        menu.collapse('hide');
    }
});
