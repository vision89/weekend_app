'use-strict';
describe( 'parserActions', function () {

    var parserActions;  //scope for tests

    beforeEach( module( 'parser', function( $provide ) {

        //Fake the verb constants
        $provide.value( 'verbConstants',
            {
                SHRINE:   { id: 1, text: 'Shrine' },
                PRIEST:   { id: 2, text: 'Priest' }
            }
        );

        //Fake the noun constants
        $provide.value( 'nounConstants',
            {
                LOOK:   { id: 1, text: 'Look' },
                TAKE:   { id: 2, text: 'Take' },
                ATTACK: { id: 3, text: 'Attack' },
                TALK:   { id: 4, text: 'Talk' }
            }
        );

    }));

    beforeEach(

        inject( function( _parserActions_ ) {

            parserActions = _parserActions_();

        })

    );


    it( 'should have a parserActions service', function () {

        expect( parserActions ).toBeDefined();

    });

    it( 'should return shrine from conToString with a noun', function () {

        expect( parserActions.nounToString( 1 ) ).toBe( 'Shrine' );

    });

    it( 'should return an empty string for a non-existent noun', function () {

        expect( parserActions.nounToString( 99999 ) ).toBe( '' );

    });

    it( 'should return talk from conToString with a verb', function () {

        expect( parserActions.verbToString( 4 ) ).toBe( 'Talk' );

    });

    it( 'should return an empty string for a non-existent verb', function () {

        expect( parserActions.verbToString( 789987 ) ).toBe( '' );

    });

});
