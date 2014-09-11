ig.module( 'plugins.availableAbilities' )
    .requires(
        'game.abilities.grenadeThrow',
        'game.abilities.laserGun',
        'game.abilities.rifle',
        'game.abilities.plasmaGun',
        'game.abilities.plasmaShotgun'
    )
    .defines(function () {
        'use strict';

        ig.AvailableAbilities = ig.global.AvailableAbilities = ig.Class.extend({
            allAbilities: [],
            availableAbilities: [],
            currentAbility: 0,
            count: 0,

            init: function(player) {
                this.addAbility(new ig.PlasmaShotgun(player));
                this.addAbility(new ig.PlasmaGun(player));
                this.addAbility(new ig.LaserGun(player));
                this.addAbility(new ig.GrenadeThrow(player));
                this.addAbility(new ig.Rifle(player));

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
