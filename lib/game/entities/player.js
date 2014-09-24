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

            weaponSheet: new ig.AnimationSheet( "media/gfx/weapons/weapons.png", 32, 16),
            health:120,
            availableActivities: null,
            currentWeapon: null,
            weaponMode: 'idle',
            weaponCurrentAnim: null,
            shootTimer: new ig.Timer(),

            initProperties: function() {
                this.parent();
                this.availableActivities = new ig.AvailableAbilities(this);
                this.handleCurrentAbility();

                this.weaponAnims = {
                    'anim_weapon2_idle': new ig.Animation( this.weaponSheet, 1, [0]),
                    'anim_weapon2_move': new ig.Animation( this.weaponSheet, 0.4, [0,1]),
                    'anim_weapon2_shoot': new ig.Animation( this.weaponSheet, 0.1, [2,3]),
                    'anim_weapon3_idle': new ig.Animation( this.weaponSheet, 1, [4]),
                    'anim_weapon3_move': new ig.Animation( this.weaponSheet, 0.4, [4,5]),
                    'anim_weapon3_shoot': new ig.Animation( this.weaponSheet, 0.1, [6,7])
                };
                this.changeWeapon({id:2});
            },

            handleCurrentAbility: function() {
                this.shoot = this.availableActivities.getCurrent();
                this.abilities.addDescendants([this.shoot]);
                this.changeWeapon(this.shoot);
            },

            changeWeapon: function(params){
                this.currentWeapon=params.id;
            },
            handleInput: function() {
                this.parent();

                // weapon change
                if (ig.input.pressed('change')) {
                    this.availableActivities.change();
                    this.handleCurrentAbility();
                }

                if (ig.input.pressed('shoot')) {
                    if(this.shootTimer.delta() > 0) this.shootTimer.set(0.1);
                    fireNumber = 1;
                    if (this.shoot.fireNumber) {
                        fireNumber = this.shoot.fireNumber;
                    }

                    for (fire = 0; fire < fireNumber; ++fire) {
                        // multiple firing cooldown
                        if (fire == fireNumber && this.shoot.multipleCooldownDelay) {
                            this.shoot.cooldownDelay = this.shoot.multipleCooldownDelay;
                        }
                        this.shoot.activate({
                            x: this.flip.x ? this.pos.x : this.pos.x + this.size.x,
                            y: this.pos.y + this.size.y * 0.5
                        });
                    }
                }
            },

            update: function(){
                this.parent();

                if (this.shootTimer.delta()<0) {
                    this.weaponMode = 'shoot';
                }else{
                    this.weaponMode = 'idle';
                }

                var weapon = 'anim_weapon'+this.currentWeapon+'_'+this.weaponMode;
                if(this.weaponAnims){
                    this.weaponCurrentAnim = this.weaponAnims[weapon];
                }


            },

            draw: function() {
                this.parent();

                if(this.weaponCurrentAnim){

                    this.weaponCurrentAnim.flip.x = this.flip.x;
                    this.weaponCurrentAnim.draw(
                        ((ig.system.width*0.5)<<0) + (this.flip.x ? -20 : -10),
                        ((ig.system.height*0.5)<<0) - 8
                    );
                }
            }


        });
    });
