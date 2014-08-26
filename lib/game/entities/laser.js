
ig.module( 'game.entities.laser' )
    .requires(
        'plusplus.abstractities.projectile'
    )
    .defines(function () {
        ig.EntityLaser = ig.global.EntityLaser = ig.Projectile.extend({
            collides: ig.EntityExtended.COLLIDES.LITE,
            size: {x: 4, y: 4},
            offset: {x: 2, y: 2},
            animSheet: new ig.AnimationSheet( "media/gfx/weapons/projectile.png", 8, 8),
            animInit: "idleX",
            animSettings: {
                moveX: { sequence: [0], frameTime: 1 },
                deathX: { sequence: [1,2,3,4,5], frameTime: 0.05 }
            },
            damage: 5,
            lifeDuration: 2,
            gravityFactor: 0,
            friction: {x:0, y:0},
            bounciness: 0,
            collisionKills: true
        });

    });