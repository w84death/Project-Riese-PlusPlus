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
            sound: new ig.Sound('media/sounds/fx/gun.*'),
            activateComplete: function(settings) {
                this.sound.volume = 0.2;
                this.sound.play();

                this.parent(settings);
            }
        });
    });