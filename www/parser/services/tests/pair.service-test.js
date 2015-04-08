'use-strict';
describe( 'pair', function () {

    var pair;  //scope for tests

    beforeEach( module( 'parser' ) );

    beforeEach(

        inject( function( _pair_ ) {

            pair = _pair_();

        })

    );


    it( 'should have a pair service', function () {

        expect( pair ).toBeDefined();

    });

    it( 'should not be ready by default', function () {

        expect( pair.isReady() ).toBeFalsy();

    });

    it( 'should not be ready if first value is 0', function () {

        pair.noun  = 1;

        expect( pair.isReady() ).toBeFalsy();

    });

    it( 'should not be ready if second value is 0', function () {

        pair.verb  = 1;

        expect( pair.isReady() ).toBeFalsy();

    });

    it( 'should be ready if both values are 1', function () {

        pair.verb = 1;
        pair.noun = 1;

        expect( pair.isReady()).toBeTruthy();

    });

});

