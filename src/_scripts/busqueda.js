'use strict';

// Constructor
var Search = function() {
    var context = $('.busqueda');
    var filters = $('.busqueda__filters__category');
    var filtersCollection = $('.busqueda__filters__collection');
    var firstCheckbox = $('.busqueda__filters__collection-list li:first-child .busqueda__filters__checkbox');
    var allOtherCheckboxes = $('.busqueda__filters__collection-list li:not(:first-child) .busqueda__filters__checkbox');

    if (context) {


        function init() {
            $('.busqueda__filters__category:first').addClass('-active');
            $('.busqueda__filters__collection:first').addClass('-active');
            firstCheckbox.addClass('jsFirstCheckbox').prop('checked', true);
        }

        allOtherCheckboxes.each(function(){
            var $this = $(this);
            $this.on('change', function() {
                console.log($this);
                $this.closest('.busqueda__filters__collection-list').find('.jsFirstCheckbox').prop('checked', false);
            });
        });

        firstCheckbox.each(function(){
            var $this = $(this);
            $this.on('change', function() {
                console.log($this);
                $this.closest('.busqueda__filters__collection-list').find('.busqueda__filters__checkbox:not(.jsFirstCheckbox)').prop('checked', false);
            });
        });

        filters.each( function() {
            var $this = $(this);
            var dataTarget = $this.data('target');

            $this.on('click', function() {
                filters.removeClass('-active');
                $this.addClass('-active');

                filtersCollection.removeClass('-active');
                filtersCollection.filter(function() {
                    return $(this).data('tab') == dataTarget;
                }).addClass('-active');
            })
        });

        init();
    }
};

module.exports = Search;
