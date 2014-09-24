ig.module( 'game.abilities.plasmaGun' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.plasma'
    )
    .defines(function () {
        ig.PlasmaGun = ig.AbilityShoot.extend({
            spawningEntity: ig.EntityPlasma,
            offsetVelX: 130,
            reload:0.1,
        });
    });