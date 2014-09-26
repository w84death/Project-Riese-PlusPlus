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
            sound: new ig.Sound('media/sounds/fx/shotgun.*'),
            activateComplete: function(settings) {
                this.sound.volume = 0.2;
                this.sound.play();

                this.parent(settings);
            }
        });
    });