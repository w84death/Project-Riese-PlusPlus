ig.module( 'game.entities.robocop' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityRobocop = ig.global.EntityRobocop = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/robocop.png", 32, 32),
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
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [7,4],
                frameTime: 0.3
            },
            shot: {
                sequence: [15,7],
                frameTime: 0.3
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 400,

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