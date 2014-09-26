ig.module( 'game.entities.enemyRanged' )
.requires(
    'game.entities.enemy'

)
.defines(function () {

    var _ut = ig.utils;

    ig.EntityEnemyRanged = ig.global.EntityEnemyRanged = ig.EntityEnemy.extend({
        projectileSpawnOffset: 10,
        weaponSheet: new ig.AnimationSheet( "media/gfx/weapons/weapons.png", 32, 16),
        counter: 0,
        initProperties: function() {
            this.parent();

            this.weaponAnims = {
                'anim_weapon0_idle': new ig.Animation( this.weaponSheet, 1, [4]),
                'anim_weapon0_move': new ig.Animation( this.weaponSheet, 0.4, [4,5]),
                'anim_weapon0_shoot': new ig.Animation( this.weaponSheet, 0.1, [6,7]),
                'anim_weapon1_idle': new ig.Animation( this.weaponSheet, 1, [0]),
                'anim_weapon1_move': new ig.Animation( this.weaponSheet, 0.4, [0,1]),
                'anim_weapon1_shoot': new ig.Animation( this.weaponSheet, 0.1, [2,3]),
                'anim_weapon2_idle': new ig.Animation( this.weaponSheet, 1, [8]),
                'anim_weapon2_move': new ig.Animation( this.weaponSheet, 0.4, [8,9]),
                'anim_weapon2_shoot': new ig.Animation( this.weaponSheet, 0.1, [10,11]),
                'anim_weapon3_idle': new ig.Animation( this.weaponSheet, 1, [12]),
                'anim_weapon3_move': new ig.Animation( this.weaponSheet, 0.4, [12,13]),
                'anim_weapon3_shoot': new ig.Animation( this.weaponSheet, 0.1, [14,15])
            };

            this.weaponCurrentAnim = this.weaponAnims['anim_weapon1_shoot'];
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
        },

//        draw: function() {
//            this.parent();
//            if (this.counter == 0) {
//            console.log(this); this.counter = 1;
//            }
//
//            if(this.weaponCurrentAnim){
//
//                this.weaponCurrentAnim.flip.x = this.flip.x;
//                this.weaponCurrentAnim.draw(
//                    ((ig.system.width*0.5)<<0) + (this.flip.x ? this.weaponPosition.flipX : this.weaponPosition.X),
//                    ((ig.system.height*0.5)<<0) + this.weaponPosition.Y
//                );
//            }
//        },
    });
});