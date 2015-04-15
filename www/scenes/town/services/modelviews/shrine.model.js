'use strict';
/**
 * Created by Dustin on 4/4/2015.
 */
angular.module( 'sceneMod' ).factory( 'shrineModel', ['shrineData', function ( shrineData ) {

    //Singleton
    var service = {};

    service.data = shrineData();

    return service;

}]);