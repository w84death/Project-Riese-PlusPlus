ig.module( 'game.entities.enemy' )
.requires(
    'plusplus.abstractities.creature',
    'plusplus.helpers.utils'
)
.defines(function () {

    var _ut = ig.utils;

    ig.EntityEnemy = ig.global.EntityEnemy = ig.Creature.extend({
        canWanderX: true,

        initProperties: function() {
            this.parent();

            _ut.addType(ig.EntityExtended, this, 'type', "DAMAGEABLE");

            if (!ig.global.wm) {

                this.preyClass = ig.EntityPlayer;
            }
        },
    });
});