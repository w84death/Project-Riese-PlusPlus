ig.module(
        'game.entities.player'
    )
    .requires(
        'plusplus.abstractities.player'
    )
    .defines(function(){

        ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

            health:100,
            weapons: [
                new ig.AbilityLaserGun(this),
                new ig.AbilityGrenadeLauncher(this)
            ],
            currentWeapon: 0,

            update: function(){
                this.parent();
            },
            selectWeapon: function(ability) {
                this.shoot = ability;
                this.abilities.addDescendants([this.shoot]);
            },
            initProperties: function() {
                this.parent();
                this.selectWeapon(this.weapons[this.currentWeapon]);
            }

        });
    });
