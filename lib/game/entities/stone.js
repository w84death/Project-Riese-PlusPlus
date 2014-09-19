ig.module( 'game.entities.stone' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityStone = ig.global.EntityStone = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/maps/forest.png", 32, 32),
        size: {x:32,y:32},

        collides: 0,
        animInit: "idleX",
        animsExpected: [ "idle" ],
        animSettings: {
            idleX: {
                sequence: [5],
                frameTime: 1
            }
        },
    });
});