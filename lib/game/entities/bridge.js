ig.module( 'game.entities.bridge' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityBridge = ig.global.EntityBridge = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/maps/forest.png", 32, 32),
        size: {x:32,y:32},

        collides: 0,
        animInit: "idleX",
        animsExpected: [ "idle" ],
        animSettings: {
            idleX: {
                sequence: [18],
                frameTime: 1
            }
        },
    });
});