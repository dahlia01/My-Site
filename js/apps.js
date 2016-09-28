/**
 * Created by Peter on 9/20/2016.
 */
$(document).ready(function() {
    $(function () {
        'use strict';

        // Fade in nav
        $('nav').fadeTo(10000,100);

        // Fade in h1
        setTimeout(function() {
            $('h1').fadeTo(10000,100);
        }, 400);

        // Fade in first intro
        setTimeout(function(){
            $('#first-text').fadeTo(15000,100);
        }, 800);

        // Fade in second intro
        setTimeout(function(){
            $('#second-text').fadeTo(15000,100);
        }, 1800);

        // Timer for the rest of the site
        // Ensure this fades after intro
        setTimeout(function() {
            // Scroll function
            $(window).scroll(function() {
                // If UX, DATA, or WEB ID enter into frame then iterate its tile
                // divs with class col-sm-4
                if(isScrolledIntoView('#UX')) {
                    fadeInIterator('#UX div.col-sm-4')
                }
                if(isScrolledIntoView('#DATA')) {
                    fadeInIterator('#DATA div.col-sm-4')
                }
                if(isScrolledIntoView('#WEB')) {
                    fadeInIterator('#WEB div.col-sm-4')
                }

                // Fades in elements with class 'fadeInBlock' if it scrolls into view
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
        }, 1000)


        //Fades in (with a timer of 300) the childs
        function fadeInIterator(els) {
            //$('#UX div.col-sm-4').each(function(i, el) {
            $(els).each(function(i, el) {
                setTimeout(function() {
                    $(el).fadeTo(7000,100);
                }, 300 + (i * 300));
            })
        };

        //returns if a given elem has scrolled into view
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;

            return ((elemTop + 100 <=docViewBottom));
        };
    });
});
