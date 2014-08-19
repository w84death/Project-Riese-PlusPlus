ig.module( 'game.entities.rat' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityRat = ig.global.EntityRat = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/jump_rat.png", 32, 32),
        size: {x:18,y:8},
        offset: {x:10,y:24},
        animInit: "idleX",
        jumpForce: 4,
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee", "death", "jump" ],
        animSettings: {
            idleX: {
                sequence: [8,9,10,11],
                frameTime: 0.5
            },
            moveX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.05
            },
            jumpX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [16,17,18,19,20,21],
                frameTime: 0.3
            },
            deathX: {
                sequence: [24,25,26,27,28,29,30,31],
                frameTime: 0.1
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 10,

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

            return this.parent(entity);

        }
    });
});