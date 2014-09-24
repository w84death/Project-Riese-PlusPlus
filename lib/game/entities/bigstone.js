ig.module( 'game.entities.bigstone' )
.requires(
    'game.entities.destructable'
)
.defines(function () {
    ig.EntityBigstone = ig.global.EntityBigstone = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/particle/stone.png", 23, 22),
        size: {x:17,y:16},
        offset: {x:3,y:3},
        animInit: "idleX",
        animsExpected: [ "idleX" ],
        animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 1
            }
        },
        maxVel: {
            x: 250,
            y: 100
        },
        friction: {
            x: 100,
            y: 100
        },
        vel: {
            x: 60,
            y: 10
        },
        scorePoints: 100,
    });
});