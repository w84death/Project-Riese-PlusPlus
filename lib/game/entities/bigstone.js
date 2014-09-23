ig.module( 'game.entities.bigstone' )
.requires(
    'plusplus.entities.destructable-damage'
)
.defines(function () {

    var _ut = ig.utils,
        _c = ig.CONFIG;

    ig.EntityBigstone = ig.global.EntityBigstone = ig.EntityDestructableDamage.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/particle/stone.png", 23, 22),
        size: {x:17,y:16},
        offset: {x:3,y:3},
        collides: ig.EntityExtended.COLLIDES.ACTIVE,
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
        gravityFactor: 1,
        performance: _c.DYNAMIC,
        highPerformance: true,
    });
});