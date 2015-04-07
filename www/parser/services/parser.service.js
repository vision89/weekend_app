'use strict';
/**
 * Used by the actions directive to communicate with the controller
 */
angular.module( 'parser').factory( 'parse', ['pair', 'parserActions', function ( pair, parserActions ) {

    //Singleton
    var service = {};

    service.pair =          pair();
    service.showLook =      true;
    service.showTake =      true;
    service.showAttack =    true;
    service.showTalk =      true;
    service.platform =      ionic.Platform.platform().toLowerCase();    //Get the device platform

    var _parserActions = parserActions();   //Private instance of service

    /**
     * Return the current parser string
     * @returns {string}
     */
    service.getActionString = function () {

        var action = '';

        action += _parserActions.verbToString( service.pair.verb );

        if ( action !== '') {

            action += ' ';

        }

        action += _parserActions.nounToString( service.pair.noun );

        return action;

    }

    return service;

}]);
