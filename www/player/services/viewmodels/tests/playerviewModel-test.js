'use -strict';
/**
 * Created by Dustin on 4/4/2015.
 */

describe( 'playerViewModel', function () {

    var playerViewModel;  //scope for tests

    beforeEach( module( 'playerMod', function( $provide) {

        //Fake the player data service
        $provide.value( 'playerData', function() {

            var service = {};

            return service;

        });

    }));

    beforeEach(

        inject( function( _playerData_, _playerViewModel_ ) {

            playerViewModel = _playerViewModel_;

        })

    );


    it( 'should have a player view model', function () {

        expect( playerViewModel ).toBeDefined();

    });

    it( 'should contain id', function () {

        expect( playerViewModel.containsId( 3, [1,2,3,4,5] )).toBeTruthy();

    });

    it( 'should not contain id', function () {

        expect( playerViewModel.containsId( 3, [2,4,6,8,10] )).toBeFalsy();

    });

});