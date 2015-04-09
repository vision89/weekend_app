'use strict';
/**
 * Used to perform functions on verb and noun constants
 */
angular.module( 'utilityMod' ).factory( 'modalMaker', [ '$ionicModal', '$rootScope',
    function ( $ionicModal, $rootScope ) {

        //New instance
        return function ( template, $scope ) {

            $scope = $scope || $rootScope.$new();   //Get a scope to bind

            /**
             * Creates the modal
             */
            var promise = $ionicModal.fromTemplateUrl( template, {

                scope: $scope,
                animation: 'slide-in-up'

            }).then( function ( modal ) {

                $scope.modal = modal;

                return modal;

            });

            /**
             * Show the modal
             */
            $scope.openModal = function() {

                $scope.modal.show();

            };

            /**
             * Close the modal
             */
            $scope.closeModal = function() {

                $scope.modal.hide();

            };

            /**
             * Remove reference when done
             */
            $scope.$on('$destroy', function() {

                $scope.modal.remove();

            });

            return promise;

        }

    }]);
