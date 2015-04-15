'use strict';
angular.module( 'characterMod' ).factory( 'characterModel', ['characterData', function ( characterData ) {

    //New instance
    var service = {};

    service.data = characterData();

    service.loading = false;

    /**
     * Returns the characters associated with the location id
     * @param id
     */
    service.getCharacters = function ( id ) {

        service.loading = true; //This won't become important until we hook up to a db

        service.data.getCharacters( id ).finally( function () {

            service.loading = false;

        });

    };

    /**
     * Returns the parsed values needed by the modal after parsing
     */
    service.getParsedValues = function ( verb, noun ) {

        //I'm not a fan of this but I need to loop through my characters and actions to find the correct one
        for ( var i = 0; i < service.data.characters.length; ++i ) {

            //Find the character
            if ( service.data.characters[i].noun.id === noun ) {

                for ( var j = 0; j < service.data.characters[i].actions.length; ++j ) {

                    if ( service.data.characters[i].actions[j].verb.id === verb ) {

                        return service.data.characters[i].actions[j];

                    }

                }

            }

        }

        return undefined;

    };

    return service;

}]);
