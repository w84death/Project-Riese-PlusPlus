ig.module( 'plugins.availableAbilities' )
    .requires(
        'game.abilities.grenadeThrow',
        'game.abilities.laserGun'
    )
    .defines(function () {
        'use strict';

        ig.AvailableAbilities = ig.global.AvailableAbilities = ig.Class.extend({
            allAbilities: [],
            availableAbilities: [],
            currentAbility: 0,

            init: function(player) {
                this.addAbility(new ig.LaserGun(player));
                //this.addAbility(new ig.GrenadeThrow(player));
            },
            addAbility: function(ability) {
                allAbilities.push(ability);
                availableAbilities.push(false);
            },
            getCurrent: function() {
                return this.allAbilities[this.currentAbility];
            }
        });

    });
