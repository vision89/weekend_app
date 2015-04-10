'use strict';
angular.module( 'characterMod' ).factory( 'characterData', ['nounConstants', 'verbConstants', '$q', function ( nounConstants, verbConstants, $q ) {

    //New instance
    return function () {

        var service = {};

        service.characters = [];

        /**
         * Make the shrine characters
         * @private
         */
        function _makeShrineCharacters() {

            var character = {};
            character.description = 'A thin bald priest paces nervously around the shrine.  He periodically stops to ' +
            'stare at the empty stones and mutter to himself before starting again.';
            character.title = 'The Priest';
            character.templateUrl = 'characters/assets/priest.png';
            character.noun = nounConstants.PRIEST;
            character.actions = [
                {
                    verb: verbConstants.LOOK,
                    title: 'Look at the Priest',
                    content: 'The priest has white thinning hair.  He is wearing a robe and sandals.'
                },
                {
                    verb: verbConstants.TALK,
                    title: 'Talk to the Priest',
                    content: 'Oh sir, oh sir!  It’s terrible, the statues of the great gods  Haymlin and Pendula have ' +
                    'been stolen!  But how!?  There isn’t even a scratch on either stone which held them.  Please sir, please ' +
                    'find the culprit who did such a terrible thing to our beloved gods'
                }];

            service.characters.push( character );

        }

        /**
         * Eventually this will hit a db.  For now we will manually create characters
         */
        service.getCharacters = function ( id ) {

            var deferred = $q.defer();

            switch( id ) {

                case nounConstants.SHRINE:

                    deferred.resolve( _makeShrineCharacters() );
                    break;

                default:

                    deferred.resolve( service.characters = [] );
                    break;

            }

            return deferred.promise;

        }

        return service;

    }

}]);
