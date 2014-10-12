ig.module( 'game.entities.enemy' )
.requires(
    'plusplus.abstractities.creature',
    'plusplus.helpers.utils',
    'plugins.scoring'

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
        spawn: function() {
            this.parent();
            this.pause();
        },
        die: function() {
            this.parent();

            // calculate score for killing creature
            ig.game.scoring.calculate(this);
        },
        update: function() {
            this.paused = !ig.game.position.onScreen(this);

            if (this.paused) {
                this.pause();
            } else {
                this.unpause();
                this.parent();
            }
        }
    });
});