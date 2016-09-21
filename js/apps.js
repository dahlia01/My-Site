/**
 * Created by Peter on 9/20/2016.
 */

$(function() {
   'use strict';
    $('h1').hide().fadeIn();
    var titlerect = $('#titlerect');
    titlerect.css('width', '200 px');
    console.log(innerWidth - titlerect.position().left);
    console.log(innerWidth);

});