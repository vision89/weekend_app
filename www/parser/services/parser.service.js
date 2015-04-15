'use strict';
/**
 * Used by the actions directive to communicate with the controller
 */
angular.module( 'parser' ).factory( 'parse', ['pair', 'parserActions', function ( pair, parserActions ) {

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

    };

    /**
     * Resets if you click the same noun twice, otherwise adds it
     * @param noun
     */
    service.checkNoun = function ( noun ) {

        if ( service.pair.noun === noun ) {

            service.pair.noun = 0;

        } else {

            service.pair.noun = noun;

        }

    };

    /**
     * Resets the verb and noun to 0's
     */
    service.resetPair = function () {

        service.pair.verb = 0;
        service.pair.noun = 0;

    };

    return service;

}]);
