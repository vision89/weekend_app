'use strict';
/**
 * Town controller
 */
angular.module( 'sceneMod' ).controller( 'ShrineController', ['$scope', 'playerModel', 'eventConstants', 'nounConstants',
    'parse', 'modalMaker', 'verbConstants', 'characterService', 'platform',
    function ( $scope, playerModel, eventConstants, nounConstants, parse, modalMaker, verbConstants, characterService, platform ) {

        //Service bindings
        $scope.playerModel = playerModel;
        $scope.eventConstants = eventConstants;
        $scope.platform = platform;    //Get the device platform
        $scope.nounConstants = nounConstants();
        $scope.characterService = characterService;

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
            if ( parse.pair.verb === verbConstants.LOOK.id && parse.pair.noun === $scope.nounConstants.SHRINE.id ) {

                _displayGenericModal( 'Look at Shrine', 'The two empty blocks show no signs of abuse.  Whatever monoliths they held were moved quite carefully.' );

            } else if ( parse.pair.verb === verbConstants.LOOK.id && parse.pair.noun === $scope.nounConstants.PRIEST.id ) {
                //Look Priest

                //Get the parse values
                var parsedValues = $scope.characterService.getParsedValues( verbConstants.LOOK.id, $scope.nounConstants.PRIEST.id );

                //If there were any values display the modal
                if ( !angular.isUndefined( parsedValues ) ) {

                    _displayGenericModal( parsedValues.title, parsedValues.content );

                } else {

                    //Reset the action
                    _resetActions()

                }

            } else if ( parse.pair.verb === verbConstants.TALK.id && parse.pair.noun === $scope.nounConstants.PRIEST.id ) {
                //Talk Priest

                //Get the parse values
                var parsedValues = $scope.characterService.getParsedValues( verbConstants.TALK.id, $scope.nounConstants.PRIEST.id );

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
