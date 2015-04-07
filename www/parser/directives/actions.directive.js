angular.module( 'parser').directive( 'actions', [ 'eventConstants', function ( eventConstants ) {

    return {

        restrict: 'E',
        templateUrl: 'parser/directives/vies/parser.view.html',
        scope: {
            parser: '=parser', //Better be an array
            platform: '=platform',
            showLook: '=showLook',
            showTake: '=showTake',
            showAttack: '=showAttack',
            showTalk: '=showTalk'
        },
        require: ['^=paarser', '^=platform'],
        controller: ['$scope', function ( $scope ) {

            //Default scope values to true

            if ( angular.isUndefined( $scope.showLook ) ) {

                $scope.showLook = true;

            }

            if ( angular.isUndefined( $scope.showTake ) ) {

                $scope.showTake = true;

            }

            if ( angular.isUndefined( $scope.showAttack ) ) {

                $scope.showAttack = true;

            }

            if ( angular.isUndefined( $scope.showTalk ) ) {

                $scope.showTalk = true;

            }

        }],
        link: ['scope', function ( scope ) {

            /**
             * Look button pressed
             */
            scope.lookPressed = function () {

                if ( scope.parser[0] === eventConstants.LOOK ) {

                    scope.parser[0] = 0;

                } else {

                    scope.parser[0] = eventConstants.LOOK;

                }

            }

            /**
             * Take button pressed
             */
            scope.takePressed = function () {

                if ( scope.parser[0] === eventConstants.TAKE ) {

                    scope.parser[0] = 0;

                } else {

                    scope.parser[0] = eventConstants.TAKE;

                }

            }

            /**
             * Attack button pressed
             */
            scope.attackPressed = function () {

                if ( scope.parser[0] === eventConstants.ATTACK ) {

                    scope.parser[0] = 0;

                } else {

                    scope.parser[0] = eventConstants.ATTACK;

                }

            }

            /**
             * Talk button pressed
             */
            scope.talkPressed = function () {

                if ( scope.parser[0] === eventConstants.TALK ) {

                    scope.parser[0] = 0;

                } else {

                    scope.parser[0] = eventConstants.TALK;

                }

            }

        }]

    }

}]);
