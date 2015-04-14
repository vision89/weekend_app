'use strict'
angular.module( 'parser' ).directive( 'navigationBar', function () {

    return {

        restrice: 'E',
        templateUrl: 'parser/directives/views/navigation.view.html',
        controller: ['$scope', 'playerModel', 'nounConstants', function ( $scope, playerModel, nounConstants ) {



        }]

    }

});