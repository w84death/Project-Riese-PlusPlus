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
            sound: new ig.Sound('media/sounds/fx/laser.*'),
            activate: function() { // somthing is wrong - there is no shooting

                this.sound.volume = 0.2;
                this.sound.play();
                this.parent();
            }
        });
    });