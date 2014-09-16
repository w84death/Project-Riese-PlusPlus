ig.module( 'game.entities.trapdoor' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityTrapdoor = ig.global.EntityTrapdoor = ig.EntityDestructable.extend({
        _wmBoxColor: 'rgba( 255, 0, 255, 0.7 )',

    });
});