ig.module( 'game.entities.alienOverseer' )
.requires(
    'game.entities.boss',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityAlienOverseer = ig.global.EntityAlienOverseer = ig.EntityBoss.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/alien_overseer.png", 92, 75),
        size: {x: 75, y: 66},
        offset: {x: 0, y: 28},
        animInit: "idleX",
        jumpForce: 1,
        maxVelGrounded: {x:50,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "melee"],
        animSettings: {
            idleX: {
                sequence: [4,5],
                frameTime: 0.1
            },
            moveX: {
                sequence: [5,4],
                frameTime: 0.1
            },
            jumpX: {
                sequence: [5],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [11,10,9,8,7,6],
                frameTime: 0.06
            }
        },
        canClimb: true,
        falling: false,
        wanderSwitchChance: 0.025,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 750,

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