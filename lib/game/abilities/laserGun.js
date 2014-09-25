ig.module( 'game.abilities.laserGun' )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.laser'
    )
    .defines(function () {
        ig.LaserGun = ig.AbilityShoot.extend({
            spawningEntity: ig.EntityLaser,
            offsetVelX: 500,
            reload:0.01,
            cooldownDelay: 0.01,
        });
    });