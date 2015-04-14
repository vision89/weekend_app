'use strict'
angular.module( 'parser' ).directive( 'navigationBar', function () {

    return {

        restrice: 'E',
        templateUrl: 'parser/directives/views/navigation.view.html',
        controller: ['$scope', 'playerModel', '$ionicSideMenuDelegate', function ( $scope, playerModel ) {

            /**
             * Toggle thetravel menu
             */
            $scope.toggleLeft = function() {


            };

        }]

    }

});