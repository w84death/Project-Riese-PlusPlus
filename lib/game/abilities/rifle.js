ig.module( 'game.abilities.rifle' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.slug'
    )
    .defines(function () {
        ig.Rifle = ig.AbilityShoot.extend({
            spawningEntity: ig.EntitySlug,
            offsetVelX: 200,
            reload:0.4,
        });
    });