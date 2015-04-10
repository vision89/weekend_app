'use strict';
angular.module( 'characterMod' ).factory( 'characterModel', ['characterData', function ( characterData ) {

    //Singleton
    var service = {};

    service.data = characterData();

    service.loading = false;

    service.getCharacters = function ( id ) {

        service.loading = true; //This won't become important until we hook up to a db

        service.data.getCharacters( id ).finally( function () {

            service.loading = false;

        });

    }

    return service;

}]);
