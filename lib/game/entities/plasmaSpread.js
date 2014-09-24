
ig.module( 'game.entities.plasmaSpread' )
    .requires(
        'plusplus.abstractities.projectile'
    )
    .defines(function () {
        ig.EntityPlasmaSpread = ig.global.EntityPlasmaSpread = ig.Projectile.extend({
            collides: ig.EntityExtended.COLLIDES.LITE,
            size: {x: 4, y: 4},
            offset: {x: 2, y: 2},
            animSheet: new ig.AnimationSheet( "media/gfx/weapons/projectile_green.png", 8, 8),
            animInit: "idleX",
            animSettings: {
                moveX: { sequence: [0], frameTime: 1 },
                deathX: { sequence: [1,2,3,4,5], frameTime: 0.05 }
            },
            damage: 8,
            lifeDuration: 2,
            gravityFactor: 0.01,
            friction: {x:0, y:0},
            bounciness: 0.05,
            collisionKills: true,
            maxVel: {
                x: 300,
                y: 100
            },
            initProperties: function() {
                this.parent();
                this.vel.y = -20 + (Math.random() * 40) << 0;
                this.maxVel.x =  this.maxVel.x + (Math.random() * 100) << 0;
                this.lifeDuration = 1 + (Math.random() * 0.5);

            }
        });

    });