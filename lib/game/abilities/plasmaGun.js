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
            cooldownDelay: 0.1,
            sound: new ig.Sound('media/sounds/fx/laser.*'),
            activateComplete: function(settings) {
                this.sound.volume = 0.2;
                this.sound.play();

                this.parent(settings);
            }
        });
    });
