ig.module( 'game.entities.soldier' )
.requires(
    'game.entities.enemyRanged',
    'game.entities.player',
    'game.abilities.rifle'
)
.defines(function () {
    ig.EntitySoldier = ig.global.EntitySoldier = ig.EntityEnemyRanged.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/soldier.png", 32, 32),
        size: {x: 10, y: 30},
        offset: {x: 11, y: 2},
        animInit: "idleX",
        jumpForce: 1,
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee", "jump", "shot" ],
        animSettings: {
            idleX: {
                sequence: [7,4],
                frameTime: 0.5
            },
            moveX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.2
            },
            jumpX: {
                sequence: [2,3],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [7,4],
                frameTime: 0.3
            },
            shot: {
                sequence: [15,14],
                frameTime: 0.3
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 200,
        weaponPosition: {
            flipX: 0, flipY: 0, X: 0, Y: 0
        },

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.abilityShoot = new ig.Rifle(this, {
                    name: 'rifle',
                    enabled: true,
                });

                this.abilities.addDescendants([
                    this.abilityShoot,
                ]);
            }
        }



    });
});