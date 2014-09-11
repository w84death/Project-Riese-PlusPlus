ig.module( 'game.abilities.plasmaShotgun' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.plasmaSpread'
    )
    .defines(function () {
        ig.PlasmaShotgun = ig.AbilityShoot.extend({
            spawningEntity: ig.EntityPlasmaSpread,
            offsetVelX: 130,
            fireNumber: 3,
            multipleCooldownDelay: 2
        });
    });