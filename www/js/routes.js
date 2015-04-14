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
            controller: 'ShrineController',
            resolve: {

                characterService: ['characterModel', 'nounConstants', function ( characterModel, nounConstants ) {

                    //Clear the characters then load them with shrine characters
                    characterModel.data.characters = [];

                    characterModel.getCharacters( nounConstants.SHRINE );

                    return characterModel;

                }]

            },
            onEnter: ['parse', function ( parse ) {

                parse.showLook =      true;
                parse.showTake =      false;
                parse.showAttack =    false;
                parse.showTalk =      true;

            }],
            onExit: ['playerModel', 'eventConstants', function ( playerModel, eventConstants ) {

                //If we are leaving this controller and this is the first run, add the started event
                //to the player model to prevent the welcome message from displaying again
                if ( playerModel.containsId( playerModel.events, eventConstants.STARTED ) === false ) {

                    playerModel.events.push( eventConstants.STARTED );

                }

            }]
        }).state( 'arena', {

            url: '/arena',
            templateUrl: 'scenes/town/controllers/views/arena.view.html',
            controller: 'ArenaController'

        }).state( 'magicians_corner', {

            url: '/magicians-corner',
            templateUrl: 'scenes/town/controllers/views/magiciansCorner.view.html',
            controller: 'MagiciansCornerController'

        }).state( 'shop', {

            url: '/shop',
            templateUrl: 'scenes/town/controllers/views/shop.view.html',
            controller: 'ShopController'

        }).state( 'bonfire', {

            url: '/bonfire',
            templateUrl: 'scenes/woods/controllers/views/bonfire.view.html',
            controller: 'BonfireController'

        }).state( 'drowned_sun', {

            url: '/drowned-sun',
            templateUrl: 'scenes/woods/controllers/views/drownedSun.view.html',
            controller: 'DrownedSunController'

        }).state( 'giants_in_the_sky', {

            url: '/giants-in-the-sky',
            templateUrl: 'scenes/woods/controllers/views/giantsInTheSky.view.html',
            controller: 'GiantsInTheSkyController'

        }).state( 'trees', {

            url: '/trees',
            templateUrl: 'scenes/woods/controllers/views/trees.view.html',
            controller: 'TreesController'

        }).state( 'gate', {

            url: '/gate',
            templateUrl: 'scenes/dungeon/controllers/views/gate.view.html',
            controller: 'GateController'

        }).state( 'lost_princess', {

            url: '/lost-princess',
            templateUrl: 'scenes/dungeon/controllers/views/lostPrincess.view.html',
            controller: 'LostPrincessController'

        }).state( 'dragons_layer', {

            url: '/dragons-layer',
            templateUrl: 'scenes/dungeon/controllers/views/dragonsLair.view.html',
            controller: 'DragonsLairController'

        })

    });
