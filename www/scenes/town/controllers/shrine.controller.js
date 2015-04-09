/**
 * Created by Dustin on 4/3/2015.
 */
/**
 * Town controller
 */
angular.module( 'sceneMod' ).controller( 'shrineController', ['$scope', 'playerModel', 'eventConstants', 'shrineModel',
    'nounConstants', 'parse', 'modalMaker', 'verbConstants',
    function ( $scope, playerModel, eventConstants, shrineModel, nounConstants, parse, modalMaker, verbConstants ) {

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

        //Catch shrine related parse events
        $scope.$on( 'ReadyToParse', function () {

            //Look at shrine
            if( parse.pair.verb === verbConstants.LOOK.id && parse.pair.noun === nounConstants.SHRINE.id ) {

                modalMaker('scenes/town/controllers/views/look-shrine.view.html', $scope).then( function (modal) {

                    modal.show();

                });

                //Reset the action
                parse.pair.verb = 0;
                parse.pair.noun = 0;

            }

        });

    }

]);
