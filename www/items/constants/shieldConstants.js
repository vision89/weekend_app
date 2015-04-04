/**
 * Created by Dustin on 4/4/2015.
 * Constants identifying inventory
 */
angular.module( 'itemMod' ).constant( 'shieldConstants', {

    SMALL_SHIELD: {

        id: 1,
        defense: 1,
        cost: 5,
        templateUrl: 'www/items/assets/small_shield.png'

    },
    LARGE_SHIELD: {

        id: 2,
        defense: 2,
        cost: 10,
        templateUrl: 'www/items/assets/large_shield.png'

    }

});