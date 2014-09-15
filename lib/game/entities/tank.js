big.module( 'game.entities.tank' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityTank = ig.global.EntityTank = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/tank.png", 250, 92),
        size: {x: 185, y: 85},
        offset: {x: 15, y: 7},
        animInit: "idleX",
        jumpForce: 0,
        maxVelGrounded: {x:60,y:50},
        health: 1000,
        animsExpected: ["move", "shoot"],
        animSettings: {
            moveX: {
                sequence: [0,1,2],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [3,4],
                frameTime: 0.5
            }
        },
        canClimb: false,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

//                this.abilityMelee = new ig.AbilityMelee(this, {
//                    name: 'melee',
//                    enabled: true
//                });
//
//                this.abilities.addDescendants([
//                    this.abilityMelee,
//                ]);
            }
        },
//        attack: function(entity) {
//            this.abilityMelee.setEntityTarget(entity);
//
//            if (this.abilityMelee.entityTarget) {
//                if(this.abilityMelee.closeEnough()){
//                    entity.receiveDamage(this.damage);
//                }
//            }
//            this.parent(entity);
//        }
    });
});