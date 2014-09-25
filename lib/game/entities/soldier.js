ig.module( 'game.entities.soldier' )
.requires(
    'game.entities.enemy',
    'plusplus.abilities.melee',
    'game.entities.player',
    'game.abilities.rifle'
)
.defines(function () {
    ig.EntitySoldier = ig.global.EntitySoldier = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/soldier.png", 32, 32),
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
                sequence: [2,3],
                frameTime: 0.05
            },
            meleeX: {
                sequence: [7,4],
                frameTime: 0.3
            },
            shot: {
                sequence: [15,14],
                frameTime: 0.3
            }
        },
        canClimb: true,
        wanderSwitchChance: 0.020,
        wanderSwitchChanceStopped: 0.040,
        damage: 6,
        scorePoints: 200,
        projectileSpawnOffset: 10,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.abilityMelee = new ig.AbilityMelee(this, {
                    name: 'melee',
                    enabled: true
                });

                this.abilityShoot = new ig.Rifle(this, {
                    name: 'rifle',
                    enabled: true,
                    cooldownDelay: 1
                });

                this.abilities.addDescendants([
                    this.abilityMelee,
                    this.abilityShoot,
                ]);
            }
        },
        attack: function(entity) {
            if (!this.abilityShoot.cooledDown()) {
                return this.abilityShoot.closeEnough();
            }

            if (this.grounded) {
                //this.abilityMelee.setEntityTarget(entity);
                this.abilityShoot.setEntityTarget(entity);

                if (
                    this.abilityShoot.entityTarget
                    && this.abilityShoot.closeEnough()
                ) {
                    var shootSettings = {
                        offsetX: 0,
                        offsetY: 0,
                    };

                    if (entity.pos.x < this.pos.x) {
                        shootSettings.offsetX = -10;
                    } else {
                        shootSettings.offsetX = 10;
                    }

                    var projectile = this.abilityShoot.activate(shootSettings);

                    if (projectile.pos.x < this.pos.x) {
                        projectile.pos.x -= this.projectileSpawnOffset;
                    } else {
                        projectile.pos.x += this.projectileSpawnOffset;
                    }

                    return this.abilityShoot.closeEnough();
                }
            }

            return this.parent(entity);
        }
    });
});