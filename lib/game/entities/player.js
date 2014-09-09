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
            availableActivities: null,

            update: function(){
                this.parent();
            },
            initProperties: function() {
                this.parent();
                this.availableActivities = new ig.AvailableAbilities(this)

                this.handleCurrentAbility();
            },
            handleCurrentAbility: function() {
                this.shoot = this.availableActivities.getCurrent();
                this.abilities.addDescendants([this.shoot]);
            },
            handleInput: function() {
                this.parent();
                // weapon change
                if (ig.input.pressed('change')) {
                    this.availableActivities.change();
                    this.handleCurrentAbility();
                }

                if (ig.input.pressed('shoot')) {
                    this.shoot.activate({
                        x: this.flip.x ? this.pos.x : this.pos.x + this.size.x,
                        y: this.pos.y + this.size.y * 0.5
                    });
                }
            }


        });
    });
