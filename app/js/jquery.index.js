$(function(){

    "use strict";

    $( function(){

        $.each( $( '.promo' ), function() {
            new Sliders ( $( this ) );
        } );

    } );

    var Sliders = function( obj ) {

        //private properties
        var _obj = obj,
            _promoSlider = _obj.find( '.promo__swiper'),
            _slider;


        //private methods
        var _initSlider = function() {

                _slider = new Swiper ( _promoSlider, {
                    autoplay: 4000,
                    speed: 500,
                    effect : 'fade',
                    loop: true
                } );

            },
            _init = function() {
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

} );