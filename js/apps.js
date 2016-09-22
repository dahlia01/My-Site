/**
 * Created by Peter on 9/20/2016.
 */
$(document).ready(function() {
    $(function () {
        //$('.col-sm-4').fadeIn(1000);
        //$('.col-sm-4').fadeTo(20000, 100);

        function fadeInIterator(els) {
            //$('#UX div.col-sm-4').each(function(i, el) {
            $(els).each(function(i, el) {
                setTimeout(function() {
                    $(el).fadeTo(7000,100);
                }, 300 + (i * 300));
            })
        }

        'use strict';


        //returns if a given elem has scrolled into view
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemTop + 100 <=docViewBottom));
        }



        $(window).scroll(function() {
            if(isScrolledIntoView('#UX')) {
                fadeInIterator('#UX div.col-sm-4')
            }
            if(isScrolledIntoView('#DATA')) {
                fadeInIterator('#DATA div.col-sm-4')
            }
            if(isScrolledIntoView('#WEB')) {
                fadeInIterator('#WEB div.col-sm-4')
            }

            $('.fadeInBlock').each( function(i){

                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
                bottom_of_window = bottom_of_window + 200;

                if(isScrolledIntoView(this) ){
                    $(this).animate({'opacity':'1'},1000);
                }
            });
        })
    });
});
