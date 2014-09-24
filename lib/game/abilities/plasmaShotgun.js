ig.module( 'game.abilities.plasmaShotgun' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.plasmaSpread'
    )
    .defines(function () {
        ig.PlasmaShotgun = ig.AbilityShoot.extend({
            spawningEntity: ig.EntityPlasmaSpread,
            offsetVelX: 130,
            fireNumber: 4,
            multipleCooldownDelay: 1,
            reload:1,
        });
    });