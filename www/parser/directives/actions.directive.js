angular.module( 'parser').directive( 'actions', [ 'eventConstants', function ( eventConstants ) {

    return {

        restrict: 'E',
        templateUrl: 'parser/directives/vies/parser.view.html',
        scope: {
            showLook: '=showLook',
            showTake: '=showTake',
            showAttack: '=showAttack',
            showTalk: '=showTalk',
            platform: '=platform'
        },
        require: ['^=platform'],
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

                scope.$broadcast( 'ActionClicked', eventConstants.LOOK );

            }

            /**
             * Take button pressed
             */
            scope.takePressed = function () {

                scope.$broadcast( 'ActionClicked', eventConstants.TAKE );

            }

            /**
             * Attack button pressed
             */
            scope.attackPressed = function () {

                scope.$broadcast( 'ActionClicked', eventConstants.ATTACK );

            }

            /**
             * Talk button pressed
             */
            scope.talkPressed = function () {

                scope.$broadcast( 'ActionClicked', eventConstants.TALK );

            }

        }]

    }

}]);
