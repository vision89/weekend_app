'use -strict';
describe( 'playerModel', function () {

    var playerModel;  //scope for tests

    beforeEach( module( 'playerMod', function( $provide) {

        //Fake the player data service
        $provide.value( 'playerData', function() {

            var service = {};

            return service;

        });

    }));

    beforeEach(

        inject( function( _playerData_, _playerModel_ ) {

            playerModel = _playerModel_;

        })

    );


    it( 'should have a player view model', function () {

        expect( playerModel ).toBeDefined();

    });

    it( 'should contain id', function () {

        expect( playerModel.containsId( 3, [1,2,3,4,5] )).toBeTruthy();

    });

    it( 'should not contain id', function () {

        expect( playerModel.containsId( 3, [2,4,6,8,10] )).toBeFalsy();

    });

});