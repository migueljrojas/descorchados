'use strict';

// Constructor
var Header = function() {
    var header = $('.header-2019');
    var body = $('body');
    var menuOpen = $('.header-2019__hamburguer');
    var menuClose = $('.header-2019__nav__close');

    menuOpen.on('click', function(){
        header.addClass('-open');
        body.addClass('-hideOverflow');
    });

    menuClose.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });


};

module.exports = Header;
