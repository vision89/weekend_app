/**
 * Created by Dustin on 4/3/2015.
 */
/**
 * Town controller
 */
angular.module( 'sceneMod' ).controller( 'shrineController', ['$scope', 'playerModel', 'eventConstants', 'shrineModel',
    'nounConstants', 'parse',
    function ( $scope, playerModel, eventConstants, shrineModel, nounConstants, parse ) {

        //Service bindings
        $scope.shrineModel = shrineModel;
        $scope.playerModel = playerModel;
        $scope.eventConstants = eventConstants;
        $scope.platform = ionic.Platform.platform().toLowerCase();    //Get the device platform
        $scope.nounConstants = nounConstants;

        //A card was clicked, we can let parse handle the event if it's ready
        $scope.cardClicked = function ( noun ) {

            if ( parse.pair.noun === noun ) {

                parse.pair.noun = 0;

            } else {

                parse.pair.noun = noun;

            }

        }

    }

]);
