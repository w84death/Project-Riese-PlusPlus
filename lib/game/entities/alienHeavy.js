ig.module( 'game.entities.alienHeavy' )
.requires(
    'game.entities.enemyRanged',
    'game.abilities.plasmaGun',
    'game.entities.player'
)
.defines(function () {
    ig.EntityAlienHeavy = ig.global.EntityAlienHeavy = ig.EntityEnemyRanged.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/alien_heavy_armour.png", 32, 32),
        size: {x: 10, y: 30},
        offset: {x: 11, y: 2},
        animInit: "idleX",
        jumpForce: 1,
        maxVelGrounded: {x:50,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee", "jump" ],
        animSettings: {
            idleX: {
                sequence: [7,4],
                frameTime: 0.5
            },
            moveX: {
                sequence: [4,5,6,7],
                frameTime: 0.2
            },
            jumpX: {
                sequence: [7],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [7,4],
                frameTime: 0.1
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.025,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 150,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.abilityShoot = new ig.PlasmaGun(this, {
                    name: 'plasma',
                    enabled: true,
                });

                this.abilities.addDescendants([
                    this.abilityShoot,
                ]);
            }
        },
    });
});