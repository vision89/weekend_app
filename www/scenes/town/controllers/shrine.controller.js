'use strict';
/**
 * Town controller
 */
angular.module( 'sceneMod' ).controller( 'shrineController', ['$scope', 'playerModel', 'eventConstants', 'shrineModel',
    'nounConstants', 'parse', 'modalMaker', 'verbConstants', 'characterService',
    function ( $scope, playerModel, eventConstants, shrineModel, nounConstants, parse, modalMaker, verbConstants, characterService ) {

        //Service bindings
        $scope.shrineModel = shrineModel;
        $scope.playerModel = playerModel;
        $scope.eventConstants = eventConstants;
        $scope.platform = ionic.Platform.platform().toLowerCase();    //Get the device platform
        $scope.nounConstants = nounConstants;
        $scope.characterService = characterService;

        //A card was clicked, we can let parse handle the event if it's ready
        $scope.cardClicked = function ( noun ) {

            if ( parse.pair.noun === noun ) {

                parse.pair.noun = 0;

            } else {

                parse.pair.noun = noun;

            }

        }

        /**
         * Reset the actions (verb/noun)
         * @private
         */
        function _resetActions() {

            parse.pair.verb = 0;
            parse.pair.noun = 0;

        }

        /**
         * Displays a generic modal with the given title/content
         * @param title
         * @param content
         * @private
         */
        function _displayGenericModal( title, content ) {

            $scope.title = title;
            $scope.content = content;

            modalMaker('utility/views/generic.modal.html', $scope).then( function ( modal ) {

                modal.show();

            });

            //Reset the action
            _resetActions()

        }

        //Catch shrine related parse events
        $scope.$on( 'ReadyToParse', function () {

            //Look at shrine
            if ( parse.pair.verb === verbConstants.LOOK.id && parse.pair.noun === nounConstants.SHRINE.id ) {

                _displayGenericModal( 'Look at Shrine', 'The two empty blocks show no signs of abuse.  Whatever monoliths they held were moved quite carefully.' );

            } else if ( parse.pair.verb === verbConstants.LOOK.id && parse.pair.noun === nounConstants.PRIEST.id ) {
                //Look Priest

                //Get the parse values
                var parsedValues = $scope.characterService.getParsedValues( verbConstants.LOOK.id, nounConstants.PRIEST.id );

                //If there were any values display the modal
                if ( !angular.isUndefined( parsedValues ) ) {

                    _displayGenericModal( parsedValues.title, parsedValues.content );

                } else {

                    //Reset the action
                    _resetActions()

                }

            } else if ( parse.pair.verb === verbConstants.TALK.id && parse.pair.noun === nounConstants.PRIEST.id ) {
                //Talk Priest

                //Get the parse values
                var parsedValues = $scope.characterService.getParsedValues( verbConstants.TALK.id, nounConstants.PRIEST.id );

                //If there were any values display the modal
                if ( !angular.isUndefined( parsedValues ) ) {

                    _displayGenericModal( parsedValues.title, parsedValues.content );

                } else {

                    //Reset the action
                    _resetActions()

                }

            } else {

                _resetActions()

            }

        });

    }

]);
