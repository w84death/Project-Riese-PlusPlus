ig.module( 'game.entities.fatrat' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityFatrat = ig.global.EntityFatrat = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/fat_rat.png", 32, 32),
        size: {x:18,y:8},
        offset: {x:10,y:24},
        animInit: "idleX",
        jumpForce: 3,
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee"],
        animSettings: {
            idleX: {
                sequence: [0,1],
                frameTime: 0.5
            },
            moveX: {
                sequence: [0,1,2,3,4,5,6,7],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [2,4],
                frameTime: 0.3
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 4,
        scorePoints: 200,

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