$(function(){

    "use strict";

    $( function(){

        $.each( $( '.menu-btn' ), function() {
            new Menu ( $( this ) );
        } );

    } );

    var Menu = function( obj ) {

        //private properties
        var _obj = obj,
            _menu = $( '.menu' ),
            _subBtn = $( '.menu__item_content' ),
            _window = $( window );

        //private methods
        var _initSlider = function() {

                _obj.on( {
                    'click': function() {

                        if ( _obj.hasClass( 'menu-btn_close' ) ) {

                            _obj.removeClass( 'menu-btn_close' );
                            _menu.removeClass( 'menu_visible' );

                        } else {

                            _obj.addClass( 'menu-btn_close' );
                            _menu.addClass( 'menu_visible' );

                            if ( _menu.height() - 10 > _window.height() ) {
                                _initContentScroll();
                                $( _menu ).getNiceScroll().show();
                            } else {
                                $( _menu ).getNiceScroll().hide();
                            }

                        }
                    }
                } ),
                _subBtn.on( {
                        'click': function() {

                            var curSubMenu = $( this ).next( '.menu__sum-menu' );
                            if ( curSubMenu.css('display') == 'none' ) {
                                $( this).addClass('active');
                                curSubMenu.slideDown(300);
                                $( _menu).getNiceScroll().resize();
                            } else {
                                $( this).removeClass('active');
                                curSubMenu.slideUp(300);
                                $( _menu).getNiceScroll().resize()
                            }

                        }
                    } ),
                _window.on( {
                    'resize': function() {

                        if ( _menu.height() - 10 > _window.height() && _obj.hasClass( 'menu-btn_close' ) ) {
                            _initContentScroll();
                            $( _menu ).getNiceScroll().show();
                        } else {
                            $( _menu ).getNiceScroll().hide();
                        }

                    }
                } )

            },
            _initContentScroll = function() {
                $( _menu ).niceScroll( {
                    autohidemode: 'false',
                    cursorborder: '',
                    cursorcolor: "#fff",
                    cursorwidth: "6px",
                    cursorborderradius: "0"
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