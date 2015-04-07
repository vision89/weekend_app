'use strict';
/**
 * Used to perform functions on verb and noun constants
 */
angular.module( 'parser').factory( 'parserActions', [ 'verbConstants', 'nounConstants',
    function ( verbConstants, nounConstants ) {

    //New instance
    return function () {

        var service = {};

        /**
         * Look through each constant and if id is contained returned the string that describes it
         * @param constants
         * @param id
         * @returns {*}
         * @private
         */
        function _conToString( constants, id ) {

            for( var con in constants ) {

                if ( constants.hasOwnProperty( con ) ) {

                    if ( constants[con].id === id ) {

                        return constants[con].text;

                    }

                }

            }

            return '';

        }

        /**
         * Returns the text for a verb id
         * @param verb
         * @returns {*}
         */
        service.verbToString = function ( verb ) {

            return _conToString( verbConstants, verb );

        }

        /**
         * Returns the text for a noun id
         * @param noun
         * @returns {*}
         */
        service.nounToString = function ( noun ) {

            return _conToString( nounConstants, noun );

        }

        return service;

    }

}]);
