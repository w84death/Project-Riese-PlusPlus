ig.module( 'game.entities.destructable' )
.requires(
        'plusplus.entities.destructable-damage'

)
.defines(function () {

        var _ut = ig.utils,
            _c = ig.CONFIG;

    ig.EntityDestructable = ig.global.EntityDestructable = ig.EntityDestructableDamage.extend({
        collides: ig.EntityExtended.COLLIDES.ACTIVE,
        gravityFactor: 1,
        performance: _c.DYNAMIC,
        highPerformance: true,
        die: function() {
            this.parent();

            // calculate score for killing creature
            ig.game.scoring.calculate(this);
        }
    });
});