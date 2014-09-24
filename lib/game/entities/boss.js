ig.module( 'game.entities.boss' )
.requires(
    'game.entities.enemy'
)
.defines(function () {

    ig.EntityBoss = ig.global.EntityBoss = ig.EntityEnemy.extend({

        die: function() {

            console.log('boss die');
            this.parent();
        }
    });
});