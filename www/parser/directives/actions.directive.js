angular.module( 'parser').directive( 'actions', function () {

    return {

        restrict: 'E',
        templateUrl: 'parser/directives/views/parser.view.html',
        controller: ['$scope', 'parse', 'verbConstants', function ( $scope, parse, verbConstants ) {

            $scope.parse =          parse;
            $scope.verbConstants =  verbConstants;
            $scope.action =         '';

            /**
             * Set or unset the verb when a button is pressed
             * @param verb
             */
            $scope.buttonPressed = function ( verb ) {

                //If it's already set remove it
                if ( $scope.parse.pair.verb === verb ) {

                    $scope.parse.pair.verb = 0;

                //Otherwise add and check to parse
                } else {

                    $scope.parse.pair.verb = verb;

                }

            };

            /**
             * When an action is performed check and update
             */
            $scope.$watchCollection( 'parse.pair', function ( newVal, oldVal ) {

                if ( newVal !== oldVal ) {

                    $scope.action = $scope.parse.getActionString();

                    //If we have a verb and noun, broadcast
                    if ( $scope.parse.pair.isReady() === true ) {

                        $scope.$broadcast( 'ReadyToParse' );

                    }

                }

            });

        }]

    }

});
