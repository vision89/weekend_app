/**
 * Created by Dustin on 4/3/2015.
 */
/**
 * All the routes
 */
angular.module( 'weekend_app' )
    .config( function ( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.otherwise('/')

        $stateProvider.state( 'shrine', {

            url: '/',
            templateUrl: 'scenes/town/controllers/views/shrine.view.html',
            controller: 'shrineController',
            onExit: ['playerModel', 'eventConstants', function ( playerModel, eventConstants ) {

                //If we are leaving this controller and this is the first run, add the started event
                //to the player model to prevent the welcome message from displaying again
                if ( playerModel.containsId( playerModel.events, eventConstants.STARTED ) === false ) {

                    playerModel.events.push( eventConstants.STARTED );

                }

            }]

        });

    });
