
ig.module( 'game.entities.plasma' )
    .requires(
        'plusplus.abstractities.projectile'
    )
    .defines(function () {
        ig.EntityPlasma = ig.global.EntityPlasma = ig.Projectile.extend({
            collides: ig.EntityExtended.COLLIDES.LITE,
            size: {x: 4, y: 4},
            offset: {x: 2, y: 2},
            animSheet: new ig.AnimationSheet( "media/gfx/weapons/projectile_green.png", 8, 8),
            animInit: "idleX",
            animSettings: {
                moveX: { sequence: [0], frameTime: 1 },
                deathX: { sequence: [1,2,3,4,5], frameTime: 0.05 }
            },
            damage: 10,
            lifeDuration: 2,
            gravityFactor: 0.01,
            friction: {x:1, y:0},
            bounciness: 0.05,
            collisionKills: true,
            maxVel: {
                x: 160,
                y: 200
            },
            initProperties: function() {
                this.parent();
                this.vel.y = -4 + (Math.random() * 4) << 0;
                this.lifeDuration = 2 + (Math.random() * 0.5);

            }
        });

    });