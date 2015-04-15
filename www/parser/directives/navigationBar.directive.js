'use strict'
angular.module( 'parser' ).directive( 'navigationBar', function () {

    return {

        restrice: 'E',
        templateUrl: 'parser/directives/views/navigation.view.html',
        controller: ['$scope', 'playerModel', 'nounConstants', '$state', 'map', '$ionicSideMenuDelegate',
            function ( $scope, playerModel, nounConstants, $state, map, $ionicSideMenuDelegate ) {

            $scope.map = map;

            /**
             * Go to the selected location
             * @param state
             */
            $scope.goTo = function ( state ) {

                $state.go( state );
                $ionicSideMenuDelegate.toggleLeft();

            }

        }]

    }

});