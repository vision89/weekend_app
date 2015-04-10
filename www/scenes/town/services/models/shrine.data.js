/**
 * Created by Dustin on 4/4/2015.
 */
/**
 * Data for the town
 */
angular.module( 'sceneMod' ).factory( 'shrineData', [function () {

    //New instance
    return function() {

        var service = {}

        service.inventory = [];  //Inventory items to display on page

        service.characters = []; //Characters to display on page

        //Picture
        service.templateUrl = 'scenes/town/assets/shrine.png';

        return service;

    }

}]);
