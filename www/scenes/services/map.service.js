'use strict';
/**
 * Contains the locations organized into a map
 */
angular.module( 'sceneMod' ).factory( 'map', ['nounConstants', function ( nounConstants ) {

    //Singleton
    var service = {};
    service.locations = [];

    //Get the parent locations
    var _all = _.partition( nounConstants(), function ( noun ) {

        return noun.parent === -1;

    });

    //Separate the parents from the children
    var _parents = _all[0];
    var _children = _all[1];

    /**
     * Organize nouns into a map
     */
    for ( var i = 0; i < _parents.length; ++i ) {

        var parent = {};
        parent.noun = _parents[i];
        parent.children = _.filter( _children, { parent: _parents[i].id } );   //Get the kids

        service.locations.push ( parent );

    }

    return service;

}]);
