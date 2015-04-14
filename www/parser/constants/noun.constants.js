'use strict';
/**
 * Constants for parsing out nouns
 */
angular.module( 'parser' ).constant( 'nounConstants', function () {

    //Main location id's
    var townId = 1;
    var woodsId = 2;
    var dungeonId = 3;

    //Constants
    return {

        //Main Locations
        TOWN:               { id: townId, text: 'Town', parent: -1 },
        WOODS:              { id: woodsId, text: 'Woods', parent: -1 },
        DUNGEON:            { id: dungeonId, text: 'Dungeon', parent: -1 },

        //Sub Locations
        SHRINE:             { id: 4, text: 'Shrine', parent: townId },
        ARENA:              { id: 5, text: 'Arena', parent: townId },
        MAGICIANS_CORNER:   { id: 6, text: 'Magicians Corner', parent: townId },
        SHOP:               { id: 7, text: 'Shop', parent: townId },
        BONFIRE:            { id: 8, text: 'Bonfire', parent: woodsId },
        DROWNED_SUN:        { id: 9, text: 'Drowned Sun', parent: woodsId },
        GIANTS_IN_THE_SKY:  { id: 10, text: 'Giants in the Sky', parent: woodsId },
        TREES:              { id: 11, text: 'Trees', parent: woodsId },
        GATE:               { id: 12, text: 'Gate', parent: dungeonId },
        LOST_PRINCESS:      { id: 13, text: 'Lost Princess', parent: dungeonId },
        DRAGONS_LAIR:       { id: 14, text: 'Dragons Lair', parent: dungeonId },

        //Characters
        PRIEST:             { id: 15, text: 'Priest' }

    }

});

