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
            count: 0,

            init: function(player) {
                this.addAbility(new ig.LaserGun(player));
                this.addAbility(new ig.GrenadeThrow(player));
            },
            addAbility: function(ability) {
                this.allAbilities.push(ability);
                this.availableAbilities.push(false);
                this.count++;
            },
            getCurrent: function() {
                return this.allAbilities[this.currentAbility];
            },
            change: function() {
                this.currentAbility++;
                if (this.currentAbility > this.count - 1) {
                    this.currentAbility = 0;
                }
            }
        });

    });
