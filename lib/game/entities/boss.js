ig.module( 'game.entities.boss' )
.requires(
    'game.entities.enemy'
)
.defines(function () {

    ig.EntityBoss = ig.global.EntityBoss = ig.EntityEnemy.extend({

        die: function() {
            for (var i in this.killswitch) {
                var name = this.killswitch[i];
                var target = ig.game.namedEntities[name];
                target.kill();
            }

            this.parent();
        }
    });
});