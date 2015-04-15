'use strict';
angular.module( 'characterMod' ).factory( 'characterData', ['nounConstants', 'verbConstants', '$q', function ( nounConstants, verbConstants, $q ) {

    //New instance
    return function () {

        var service = {};
        var _nounConstants = nounConstants();

        service.characters = [];

        /**
         * Make the shrine characters
         * @private
         */
        function _makeShrineCharacters () {

            var character = {};
            character.description = 'A thin bald priest paces nervously around the shrine.  He periodically stops to ' +
            'stare at the empty stones and mutter to himself before starting again.';
            character.title = 'The Priest';
            character.templateUrl = 'characters/assets/priest.png';
            character.noun = _nounConstants.PRIEST;
            character.actions = [
                {
                    verb: verbConstants.LOOK,
                    title: 'Look at the Priest',
                    content: 'The priest has white thinning hair.  He is wearing a robe and sandals.'
                },
                {
                    verb: verbConstants.TALK,
                    title: 'Talk to the Priest',
                    content: '"Oh sir, oh sir!  It\'s terrible, the statues of the great gods  Haymlin and Pendula have ' +
                    'been stolen!  But how!?  There isn\'t even a scratch on either stone which held them.  Please sir, please ' +
                    'find the culprit who did such a terrible thing to our beloved gods"'
                }];

            service.characters.push( character );

        };

        function _makeArenaCharacters () {

            var character = {};
            character.description = 'A large warrior with a sheathed sword stands outside the arena.  He yawns and looks ' +
            'at the arena in disappointment.  You see his head fall forward as he briefly falls asleeep and wake up. ' +
            'After a few minutes of this he groans and yells, "Oh will somebody please challenge me!"';
            character.title = 'Mastus Gamerates';
            character.templateUrl = 'characters/assets/mastus.png';
            character.noun = _nounConstants.MASTUS_GAMERATES;
            character.actions = [
                {
                    verb: verbConstants.LOOK,
                    title: 'Look at Mastus Gamerates',
                    content: 'He is tall, strong, and bored.  There has not been a worthy opponent for ages.  He stands next' +
                    ' to the arena yawning and cracking his large knuckles.  He doesn\'t notice you.'
                },
                {
                    verb: verbConstants.TALK,
                    title: 'Talk to Mastus Gamerates',
                    content: 'Mastus chuckles as he says, "I haven\'t had a worthy opponent in ages, I\'m sure you\'re not worthy either."'
                },
                {
                    verb: verbConstants.ATTACK,
                    title: 'Fight Mastus Gamerates',
                    content: 'Mastus chuckles, "Really!  He says, well, this should only take a few minutes of my time." ' +
                    'Mastus pulls out a bloody sword and walks into the Arena.'
                }];

            service.characters.push( character );

        }

        /**
         * Eventually this will hit a db.  For now we will manually create characters
         */
        service.getCharacters = function ( id ) {

            var deferred = $q.defer();

            switch( id ) {

                case _nounConstants.SHRINE.id:

                    deferred.resolve( _makeShrineCharacters() );
                    break;

                case _nounConstants.ARENA.id:

                    deferred.resolve( _makeArenaCharacters() );
                    break;

                default:

                    deferred.resolve( service.characters = [] );
                    break;

            }

            return deferred.promise;

        };

        return service;

    }

}]);
