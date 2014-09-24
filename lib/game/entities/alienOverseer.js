ig.module( 'game.entities.alienOverseer' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityAlienOverseer = ig.global.EntityAlienOverseer = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/alien_overseer.png", 32, 32),
        size: {x: 10, y: 30},
        offset: {x: 11, y: 2},
        animInit: "idleX",
        jumpForce: 1,
        maxVelGrounded: {x:50,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee"],
        animSettings: {
            idleX: {
                sequence: [6,5],
                frameTime: 0.5
            },
            moveX: {
                sequence: [6,5],
                frameTime: 0.2
            },
            jumpX: {
                sequence: [5],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [12,11,10,9,8,7],
                frameTime: 0.12
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.025,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 250,

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