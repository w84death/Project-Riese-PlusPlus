
ig.module( 'game.entities.slug' )
    .requires(
        'plusplus.abstractities.projectile'
    )
    .defines(function () {
        ig.EntitySlug = ig.global.EntitySlug = ig.Projectile.extend({
            collides: ig.EntityExtended.COLLIDES.LITE,
            size: {x: 2, y: 2},
            offset: {x: 2, y: 2},
            animSheet: new ig.AnimationSheet( "media/gfx/weapons/bullet_circle_red.png", 4, 4),
            animInit: "moveX",
            animSettings: {
                moveX: { sequence: [0], frameTime: 1 }
            },
            damage: 15,
            lifeDuration: 3,
            gravityFactor: 0.02,
            friction: {x:0, y:0},
            bounciness: 0,
            collisionKills: true,
            maxVel: {
                x: 250,
                y: 150
            },
            initProperties: function() {
                this.parent();
                this.vel.y = -4 + (Math.random() * 4) << 0;

            }
        });

    });