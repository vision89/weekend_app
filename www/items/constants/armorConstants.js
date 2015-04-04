/**
 * Created by Dustin on 4/4/2015.
 * Constants identifying armor
 */
angular.module( 'itemMod' ).constant( 'armorConstants', {

    LIGHT_ARMOR: {

        id: 1,
        defense: 1,
        cost: 5,
        templateUrl: 'www/items/assets/light_armor.png'

    },
    HEAVY_ARMOR: {

        id: 2,
        defense: 2,
        cost: 10,
        templateUrl: 'www/items/assets/heavy_armor.png'

    }

});
