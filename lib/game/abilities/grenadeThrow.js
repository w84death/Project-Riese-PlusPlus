ig.module(
        'game.abilities.grenadeThrow'
    )
    .requires(
        'plusplus.abilities.ability-shoot',
        'game.entities.grenade',
        'plusplus.helpers.utils'
    )
    .defines(function() {
        "use strict";

        var _ut = ig.utils;

        /**
         * Grenade launcher ability.
         * @class
         * @extends ig.AbilityShoot
         * @memberof ig
         * @author Collin Hover - collinhover.com
         **/
        ig.GrenadeThrow = ig.AbilityShoot.extend({

            // this ability spawns a grenade

            spawningEntity: ig.EntityProjectileGrenade,

            // costs 4 energy to use

            costActivate: 0,

            // velocity towards offset direction

            offsetVelX: 100,
            offsetVelY: 100,

            // velocity relative to the entity using the ability
            // this helps for running and gunning

            relativeVelPctX: 10,
            relativeVelPctY: 10,

            // normally a shoot ability might only go straight horizontal
            // but for a grenade, we'll let it go any direction

            shootLocationMinPctY: 0,
            shootLocationMaxPctY: 10,
            cooldownDelay: 0.5,
            offsetAccelY: 10,
            // use this method to add types for checks
            // since we are using bitwise flags
            // we can take advantage of the fact that they can be added


            initTypes: function() {

                this.parent();

                _ut.addType(ig.Ability, this, 'type', "SPAMMABLE");

            }

        });

    });