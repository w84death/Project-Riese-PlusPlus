ig.module( 'game.entities.spider' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntitySpider = ig.global.EntitySpider = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/explosive_spider.png", 32, 32),
        size: {x:18,y:8},
        offset: {x:10,y:24},
        animInit: "idleX",
        jumpForce: 5,
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animsExpected: [ "idle", "move", "death", "jump", "melee" ],
        animSettings: {
            idleX: {
                sequence: [0,1],
                frameTime: 0.5
            },
            moveX: {
                sequence: [0,1,2,3,4],
                frameTime: 0.05
            },
            jumpX: {
                sequence: [3,4],
                frameTime: 0.05
            },
            melee: {
                sequence: [3,4],
                frameTime: 0.05
            },
            deathX: {
                sequence: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                frameTime: 0.1
            }
        },
        canClimb: true,
        falling: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 5,
        scorePoints: 200,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.abilityMelee = new ig.AbilityMelee(this, {
                    name: 'melee',
                    enabled: true,
                    requiresTarget: true
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
                    this.kill();
                }
            }
            this.parent(entity);
        }
    });
});