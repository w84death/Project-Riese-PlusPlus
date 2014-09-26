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
            reloadTimer: new ig.Timer(),
            painTimer: new ig.Timer(),
            spawnTimer: new ig.Timer(),
            weaponPosition: {
                flipX: 0, flipY: 0, X: 0, Y: 0
            },
            soundDamage: new ig.Sound('media/sounds/fx/damage.*'),
            damageDelay: 0.2,

            initProperties: function() {
                this.parent();
                this.availableActivities = new ig.AvailableAbilities(this);
                this.throw = new ig.GrenadeThrow(this);

                this.handleCurrentAbility();

                this.weaponAnims = {
                    'anim_weapon0_idle': new ig.Animation( this.weaponSheet, 1, [4]),
                    'anim_weapon0_move': new ig.Animation( this.weaponSheet, 0.4, [4,5]),
                    'anim_weapon0_shoot': new ig.Animation( this.weaponSheet, 0.1, [6,7]),
                    'anim_weapon1_idle': new ig.Animation( this.weaponSheet, 1, [0]),
                    'anim_weapon1_move': new ig.Animation( this.weaponSheet, 0.4, [0,1]),
                    'anim_weapon1_shoot': new ig.Animation( this.weaponSheet, 0.1, [2,3]),
                    'anim_weapon2_idle': new ig.Animation( this.weaponSheet, 1, [8]),
                    'anim_weapon2_move': new ig.Animation( this.weaponSheet, 0.4, [8,9]),
                    'anim_weapon2_shoot': new ig.Animation( this.weaponSheet, 0.1, [10,11]),
                    'anim_weapon3_idle': new ig.Animation( this.weaponSheet, 1, [12]),
                    'anim_weapon3_move': new ig.Animation( this.weaponSheet, 0.4, [12,13]),
                    'anim_weapon3_shoot': new ig.Animation( this.weaponSheet, 0.1, [14,15])
                };
                this.changeWeapon({id:3});
                this.spawnTimer.set(1);
            },

            handleCurrentAbility: function() {
                this.shoot = this.availableActivities.getCurrent();
                this.abilities.addDescendants([this.shoot]);
                this.changeWeapon(this.shoot);
            },

            changeWeapon: function(params){
                // this.currentWeapon=params.id;
                this.currentWeapon = this.availableActivities.currentAbility;
            },
            handleInput: function() {
                this.parent();

                // weapon change
                if (ig.input.pressed('change')) {
                    this.availableActivities.change();
                    this.handleCurrentAbility();
                }

                if (ig.input.pressed('throw')) {
                    this.throw.activate({
                        x: this.flip.x ? this.pos.x : this.pos.x + this.size.x,
                        y: this.pos.y + this.size.y * 0.5
                    });
                }

                if (ig.input.pressed('shoot') && this.reloadTimer.delta() > 0) {
                    if(this.shootTimer.delta() > 0) this.shootTimer.set(0.1);
                    this.reloadTimer.set(this.shoot.reload);

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

                if(this.weaponCurrentAnim && this.spawnTimer.delta() > 0){

                    this.weaponCurrentAnim.flip.x = this.flip.x;
                    this.weaponCurrentAnim.draw(
                        ((ig.system.width*0.5)<<0) + (this.flip.x ? this.weaponPosition.flipX : this.weaponPosition.X),
                        ((ig.system.height*0.5)<<0) + this.weaponPosition.Y
                );
                }
            },
            receiveDamage: function(amount, from, unblockable) {

                if (this.painTimer.delta() > 0) {

                    this.painTimer.set(0.2 + (Math.random() / 4));
                    this.soundDamage.volume = 0.05 + (Math.random() / 4);
                    this.soundDamage.play();
                }

                return  this.parent(amount, from, unblockable);
            },
            spawn: function() {
                this.spawnTimer.set(1);
                this.parent();
            }


        });
    });
