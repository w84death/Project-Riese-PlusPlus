ig.module( 'game.entities.enemy' )
.requires(
    'plusplus.abstractities.creature'
)
.defines(function () {
    ig.EntityEnemy = ig.global.EntityEnemy = ig.Creature.extend({
        canWanderX: true,

        initProperties: function() {
            this.parent();

            if (!ig.global.wm) {

                this.preyClass = ig.EntityPlayer;
            }
        },
    });
});