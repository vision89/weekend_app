angular.module( 'parser').factory( 'pair', function () {

    //New instance of a pair
    return function () {

        var service = {};

        service.verb = 0;
        service.noun = 0;

        /**
         * Checks if the pair is ready to parse
         * @returns {boolean}
         */
        service.isReady = function () {

            return service.verb > 0 && service.noun > 0;

        }

        return service;

    }

});
