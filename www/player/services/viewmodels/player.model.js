'use strict';
/**
 * Created by Dustin on 4/4/2015.
 */
/**
 * Holds the functionality used by the views
 */
angular.module( 'playerMod' ).factory( 'playerModel', ['playerData',

    function ( playerData ) {

        //Singleton
        var service = {};

        service.data = playerData();

        service.events = [];

        /**
         * Returns true if the array contains the specified id
         * @param id
         * @param events
         * @returns {boolean}
         */
        service.containsId = function( id, enums ) {

            return enums.indexOf( id ) > -1;

        }

        return service;

}]);
