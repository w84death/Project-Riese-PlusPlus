ig.module('game.entities.strongMan')
    .requires(
        'game.entities.player',
        'game.abilities.laserGun',
        'game.abilities.grenadeLauncher'
    )
    .defines(function () {
        EntityStrongMan = EntityPlayer.extend({
            animSheet: new ig.AnimationSheet("media/gfx/players/strong_man.png", 32, 32),
            animInit: "idleX",
            animSettings: {
                idleX: { sequence: [0, 1, 2, 3], frameTime: 0.2 },
                move: { sequence: [4, 5, 6, 7], frameTime: 0.2 },
                jump: { sequence: [8], framerate: 1},
                shotX: { sequence: [9], framerate: 1}
            },
            // params
            jumpForce: 7,
            maxVelGrounded: {x: 90, y: 90},
            health: 120,
            size: {x: 10, y: 30},
            offset: {x: 11, y: 2},

            initProperties: function() {
                this.parent();
                this.shoot = new ig.AbilityGrenadeLauncher(this);
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