ig.module( 'game.abilities.rifle' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.slug'
    )
    .defines(function () {
        ig.Rifle = ig.AbilityShoot.extend({
            spawningEntity: ig.EntitySlug,
            reload:0.4,
            cooldownDelay: 0.4,
        });
    });