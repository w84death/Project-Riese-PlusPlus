ig.module( 'game.entities.tank' )
.requires(
    'game.entities.boss',
    'plusplus.abilities.melee',
    'game.entities.player'
)
.defines(function () {
    ig.EntityTank = ig.global.EntityTank = ig.EntityBoss.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/tank.png", 250, 92),
        size: {x: 185, y: 85},
        offset: {x: 15, y: 7},
        animInit: "idleX",
        jumpForce: 3,
        maxVelGrounded: {x:200,y:50},
        health: 1000,
        animsExpected: [ "idle", "move", "melee", "jump" ],
        animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 0.05
            },
            jump: {
                sequence: [0],
                frameTime: 0.05
            },
            moveX: {
                sequence: [0,1,2],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [3,4],
                frameTime: 0.5
            }
        },
        canClimb: true,
        falling: false,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.002,
        damage: 10,
        scorePoints: 5000,
        sound: new ig.Sound('media/sounds/fx/tank_sound.*'),

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

            // plays sound
            this.sound.volume = 0.2;
            this.sound.play();
            this.sound.loop = 1;
        },
        die: function() {
            this.parent();
            this.sound.stop();
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