ig.module( 'game.entities.caveCeiling' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityCaveCeiling = ig.global.EntityCaveCeiling = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/maps/forest.png", 32, 32),
        size: {x:32,y:32},

        collides: 0,
        animInit: "idleX",
        animsExpected: [ "idle" ],
        animSettings: {
            idleX: {
                sequence: [61],
                frameTime: 1
            }
        },
    });
});