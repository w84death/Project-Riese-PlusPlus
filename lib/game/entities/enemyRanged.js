ig.module( 'game.entities.enemyRanged' )
.requires(
    'game.entities.enemy'

)
.defines(function () {

    var _ut = ig.utils;

    ig.EntityEnemyRanged = ig.global.EntityEnemyRanged = ig.EntityEnemy.extend({
        projectileSpawnOffset: 10,

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