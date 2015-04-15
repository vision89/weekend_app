'use strict';
/**
 * Arena controller
 */
angular.module( 'sceneMod' ).controller( 'ArenaController', ['$scope', 'characterService', 'platform', 'eventConstants',
    'nounConstants', 'parse',
    function ( $scope, characterService, platform, eventConstants, nounConstants, parse ) {

        $scope.characterService = characterService;
        $scope.platform = platform;
        $scope.eventConstants = eventConstants;
        $scope.nounConstants = nounConstants();

        //A card was clicked, we can let parse handle the event if it's ready
        $scope.cardClicked = function ( noun ) {

            parse.checkNoun( noun );

        }

        /**
         * Reset the actions (verb/noun)
         * @private
         */
        function _resetActions() {

            parse.resetPair();

        }

}]);
