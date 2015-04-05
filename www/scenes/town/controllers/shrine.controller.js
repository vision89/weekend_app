/**
 * Created by Dustin on 4/3/2015.
 */
/**
 * Town controller
 */
angular.module( 'sceneMod' ).controller( 'shrineController', ['$scope', 'playerModel', 'eventConstants', 'shrineModel',
    function ( $scope, playerModel, eventConstants, shrineModel ) {

        //Service bindings
        $scope.shrineModel = shrineModel;
        $scope.playerModel = playerModel;
        $scope.eventConstants = eventConstants;

    }

]);
