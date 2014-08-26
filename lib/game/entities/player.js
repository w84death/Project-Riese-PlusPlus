ig.module(
        'game.entities.player'
    )
    .requires(
        'plusplus.abstractities.player',
        'game.abilities.laserGun',
        'game.abilities.grenadeThrow',
        'plugins.availableAbilities'
    )
    .defines(function(){

        ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

            health:100,

            update: function(){
                this.parent();
            },
            initProperties: function() {
                this.parent();
                available = ig.AvailableAbilities;
                available.init(this);


                this.shoot = available.getCurrent();
                this.abilities.addDescendants([this.shoot]);
            },
            handleInput: function() {
                this.parent();
                if (ig.input.pressed('shoot')) {
                    this.shoot.activate({
                        x: this.flip.x ? this.pos.x : this.pos.x + this.size.x,
                        y: this.pos.y + this.size.y * 0.5
                    });
                }
            }


        });
    });
