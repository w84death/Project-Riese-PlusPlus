ig.module( 'game.entities.worker' )
.requires(
    'game.entities.boss',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityWorker = ig.global.EntityWorker = ig.EntityBoss.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/worker.png", 64, 64),
        size: {x: 64, y: 64},

        animInit: "idleX",
        jumpForce: 1,
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animsExpected: ["idle", "move", "jump"],
        animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 1
            },
            jumpX: {
                sequence: [0],
                frameTime: 1
            },
            moveX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.05
            }
        },
        canClimb: false,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 5,
        scorePoints: 3000,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.abilityMelee = new ig.AbilityMelee(this, {
                    name: 'melee',
                    enabled: true
                });

                this.abilities.addDescendants([
                    this.abilityMelee,
                ]);
            }
        },
        attack: function(entity) {
            this.abilityMelee.setEntityTarget(entity);

            if (this.abilityMelee.entityTarget) {
                if(this.abilityMelee.closeEnough()){
                    entity.receiveDamage(this.damage);
                }
            }
            this.parent(entity);
        }
    });
});