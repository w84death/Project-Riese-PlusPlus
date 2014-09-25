ig.module( 'game.entities.forcefield' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityForcefield = ig.global.EntityForcefield = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/particle/energy_shield.png", 7, 32),
        size: {x:7,y:32},

        collides: 0,
        animInit: "idleX",
        animsExpected: [ "idle" ],
        animSettings: {
            idleX: {
                sequence: [0,1,2],
                frameTime: 0.1
            }
        },
    });
});