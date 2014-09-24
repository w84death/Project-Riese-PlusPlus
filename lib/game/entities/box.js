ig.module( 'game.entities.box' )
.requires(
    'game.entities.destructable'
)
.defines(function () {
    ig.EntityDestructableDamage = ig.global.EntityBox = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/particle/box.png", 16, 19),
        size: {x:16,y:16},
        offset: {x:0,y:4},

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
        scorePoints: 150,
    });
});