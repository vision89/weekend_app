/**
 * Created by Dustin on 4/3/2015.
 */
/**
 * All the routes
 */
angular.module( 'weekend_app' )
    .config( function ( $stateProvider, $urlRouoterProvider ) {

        $urlRouterProvider.otherwise('/')

        $stateProvider.state( 'town', {

            url: '/',
            templateUrl: 'www/scenes/town/controllers/views/townView.html',
            controller: 'townController'

        });

    });
