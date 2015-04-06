angular.module( 'utilityMod' ).directive( 'welcome', function () {

    return {

        restrict: 'E',
        template: '',
        scope: true,
        controller: ['$scope', '$ionicModal', function ( $scope, $ionicModal ) {

            //The modal we will display
            $ionicModal.fromTemplatUrl( 'www/utility/directives/views/welcome.view.html', {

                scope: $scope,
                animation: 'slide-in-up'

            }).then( function ( modal ) {

                $scope.modal = modal;

            });

            //Close the modal
            $scope.closeModal = function () {

                $scope.modal.hide();

            }

            //Remove the modal from memory
            $scope.$on( '$destroy', function () {

                $scope.modal.remove();

            });

            //Display the modal
            $scope.modal.show();

        }]

    }

});
