/*
----------------------------------------------------------------------------

    P1X Team
    Project Riese (codename)

    abstract: Game for TheJam.pl
    created: 01-07-2014
    license: do what you want and dont bother me

    webpage: http://p1x.in
    twitter: @w84death

----------------------------------------------------------------------------

    GAME FLOW
    Everything for managing the game state machine

----------------------------------------------------------------------------
*/
ig.module(
    'plugins.gui'
)
.requires(
    'impact.game'
)
.defines(function(){

ig.GUI = ig.Class.extend({

    fontWhite:      new ig.Font( 'media/gfx/fonts/white.png' ),
    fontColor:      new ig.Font( 'media/gfx/fonts/color.png' ),
    fontRed:      new ig.Font( 'media/gfx/fonts/red.png' ),
    fontBlue:      new ig.Font( 'media/gfx/fonts/blue.png' ),

    logoZakladImage:      new ig.Image( 'media/gfx/gui/logo_zaklad.png' ),
    logoP1XImage:      new ig.Image( 'media/gfx/gui/logo_p1x.png' ),
    logoTheJamImage:      new ig.Image( 'media/gfx/gui/logo_thejam.png' ),
    logoPieczarkaImage:      new ig.Image( 'media/gfx/gui/logo_pieczarka.png' ),

    logoImage:      new ig.Image( 'media/gfx/logo.png' ),
    hudLeftBgImage:      new ig.Image( 'media/gfx/gui/fake_gui.png' ),
    hudLifeBg:      new ig.Image( 'media/gfx/gui/hud_life_bg.png' ),
    hudLifeFg:      new ig.Image( 'media/gfx/gui/hud_life_fg.png' ),
    hudHearth:      new ig.Image( 'media/gfx/gui/hearth.png' ),
    hudWeaponBgImage:      new ig.Image( 'media/gfx/gui/hud_weapons.png' ),
    hudWeaponReloadImage:      new ig.Image( 'media/gfx/gui/weapon_reload.png' ),
    hudWeaponSelected: new ig.Image( 'media/gfx/gui/hud_selected_weapons.png'),
    timer:          new ig.Timer(),
    buttons: [],
    buttonImage:    new ig.Image( 'media/gfx/gui/buttons.png' ),
    btcImage:    new ig.Image( 'media/gfx/gui/bitcoin.png' ),

    init: function(){
        this.top = {
            x: ig.system.width * 0.5,
            y: 32
        };

        this.topRight = {
            x: ig.system.width - 12,
            y: 12
        };

        this.topLeft = {
            x: 12,
            y: 12
        };

        this.center = {
            x: ig.system.width * 0.5,
            y: ig.system.height * 0.5
        };

        this.centerBottom = {
            x: ig.system.width * 0.5,
            y: ig.system.height - 12
        };

        this.bottom = {
            x: ig.system.width * 0.5,
            y: ig.system.height - 32
        };

        this.bottomLeft = {
            x: 16,
            y: ig.system.height - 32
        };

        this.menu = {
            x: ig.system.width * 0.5,
            y: ( ig.system.height * 0.5 ) - 16
        };

        this.touch = {
            dPad: {
                x: 24,
                y: ig.system.height * 0.5
            },
            buttons: {
                x: ig.system.width - 32,
                y: ig.system.height * 0.5
            },
            start: {
                x: ig.system.width,
                y: ig.system.height - 32
            }
        };


        // TOUCH
        if( ig.ua.mobile && !ig.game.settings.ouya) {
            this.buttons = [
                new ig.TouchButton( 'left', this.touch.dPad.x-16, this.touch.dPad.y, 16, 16, this.buttonImage, 3 ),
                new ig.TouchButton( 'right', this.touch.dPad.x+16, this.touch.dPad.y, 16, 16, this.buttonImage, 1 ),
                new ig.TouchButton( 'up', this.touch.dPad.x, this.touch.dPad.y-16, 16, 16, this.buttonImage, 0 ),
                new ig.TouchButton( 'down', this.touch.dPad.x, this.touch.dPad.y+16, 16, 16, this.buttonImage, 2 ),
                new ig.TouchButton( 'b', this.touch.buttons.x-32, this.touch.buttons.y-60, 16, 16, this.buttonImage, 7 ),
                new ig.TouchButton( 'y', this.touch.buttons.x, this.touch.buttons.y-60, 16, 16, this.buttonImage, 5 ),//menu
                new ig.TouchButton( 'a', this.touch.buttons.x, this.touch.buttons.y, 16, 16, this.buttonImage, 4 ),//jump
                new ig.TouchButton( 'x', this.touch.buttons.x, this.touch.buttons.y+24, 16, 16, this.buttonImage, 6 )//shoot
            ];
        }
        this.fontWhite.letterSpacing = -1;
        this.fontWhite.lineSpacing = -2;
        this.fontColor.letterSpacing = -1;
        this.fontColor.lineSpacing = -2;


    },

    draw: function(){
        var STATE = ig.game.flow.STATE,
            menus = ig.game.menu.menus;

        if(STATE == 'intro'){

            this.logoImage.draw(this.center.x - ((this.logoImage.width*0.5)<<0),this.center.y);



            if((this.timer.delta()<<0) % 2 == 0){
                this.fontColor.draw(
                    'PRESS START [ENTER]',
                    this.bottom.x, this.bottom.y,
                    ig.Font.ALIGN.CENTER
                );
            }


        }

        if(STATE == 'credits'){
            this.fontWhite.draw(
                'PROJECT RIESE\n'+
                'A GAME BY P1X\n'+
                '\n'+
                'Krzysztof Jankowski - code, gfx, sfx\n'+
                'Wojtek - code\n'+
                'Pawel - code, gfx, sfx\n'+
                '\n'+
                'https://github.com/w84death\n'+
                'http://p1x.in',
                this.top.x, this.top.y,
                ig.Font.ALIGN.CENTER
            );

            this.fontColor.draw(
                '<< BACK',
                this.bottom.x, this.bottom.y,
                ig.Font.ALIGN.CENTER
            );

        }

        if(STATE == 'menu'){
            this.fontWhite.draw('- MAIN MENU -', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );

            if(menus[STATE].position == 0){
                this.fontColor.draw('START GAME', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('START GAME', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 1){
                this.fontColor.draw('CREDITS', this.menu.x, this.menu.y+36, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('CREDITS', this.menu.x, this.menu.y+36, ig.Font.ALIGN.CENTER );
            }
        }

        if(STATE == 'hiscore'){
            this.fontWhite.draw('- HISCORE -', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );

            for (var i = 0; i < 5; i++) {
                this.fontWhite.draw(100000-(i*10000) + ' P1X TEAM', this.menu.x, this.menu.y+(i*12), ig.Font.ALIGN.CENTER );
            };

            this.fontColor.draw(
                '<< BACK',
                this.bottom.x, this.bottom.y,
                ig.Font.ALIGN.CENTER
            );
        }

        if(STATE == 'choose_map'){
           this.fontWhite.draw('- CHOOSE MAP -', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );

            if(menus[STATE].position == 0){
                this.fontColor.draw('EPISODE I', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('EPISODE I', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 1){
                this.fontColor.draw('<< BACK', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('<< BACK', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }
        }

        if(STATE == 'choose_hero'){
           this.fontWhite.draw('- CHOOSE HERO -', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );

           if(menus[STATE].position == 0){
                this.fontColor.draw('STRONG MAN', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('STRONG MAN', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 1){
                this.fontColor.draw('MC CTHULHU', this.menu.x, this.menu.y+24, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('MC CTHULHU', this.menu.x, this.menu.y+24, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 2){
                this.fontColor.draw('<< BACK', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('<< BACK', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }
        }


        if(STATE == 'choose_map' || STATE == 'choose_hero' || STATE == 'menu'){
            this.fontWhite.draw(
                'BITCOINS HERE:',
                this.bottomLeft.x,
                this.bottomLeft.y-56,
                ig.Font.ALIGN.LEFT
            );
            this.btcImage.draw(this.bottomLeft.x, this.bottomLeft.y-46);
        }

        if(STATE == 'game_menu'){
            this.fontWhite.draw('- GAME MENU -', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );

            if(menus[STATE].position == 0){
                this.fontColor.draw('RETURN TO GAME >>', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('RETURN TO GAME >>', this.menu.x, this.menu.y+12, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 1){
                this.fontColor.draw('LOAD LEVEL 1', this.menu.x, this.menu.y+24, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('LOAD LEVEL 1', this.menu.x, this.menu.y+24, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 2){
                this.fontColor.draw('LOAD LEVEL 2', this.menu.x, this.menu.y+36, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('LOAD LEVEL 2', this.menu.x, this.menu.y+36, ig.Font.ALIGN.CENTER );
            }

            if(menus[STATE].position == 3){
                this.fontColor.draw('<< QUIT TO MENU', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }else{
                this.fontWhite.draw('<< QUIT TO MENU', this.menu.x, this.bottom.y, ig.Font.ALIGN.CENTER );
            }
        }

        if(STATE == 'game'){
            // HUD
            var player = ig.game.getPlayer();
            if(player){
                this.fontColor.draw(ig.game.score, this.topLeft.x+62, this.topLeft.y, ig.Font.ALIGN.RIGHT );

                this.fontRed.draw(ig.game.multiplierMsg, this.topLeft.x+130, this.topLeft.y, ig.Font.ALIGN.RIGHT );

                this.hudLifeBg.draw(this.topLeft.x, this.topLeft.y+8);
                for (var i = 0; i < (player.health*0.1)<<0; i++) {
                    this.hudLifeFg.draw(this.topLeft.x+2+(i*5), this.topLeft.y+10);
                };

                this.hudWeaponBgImage.draw(this.topRight.x-54, this.topRight.y-6);
                var pcw = player.currentWeapon, pcwX = -46;

                if(pcw == 1){
                    pcwX+= 14;
                }
                if(pcw == 2){
                    pcwX+= 24;
                }
                if(pcw == 3){
                    pcwX+= 38;
                }
                this.hudWeaponSelected.draw(this.topRight.x+pcwX, this.topRight.y-4);

                var rtime, reload = 10;
                if(player.reloadTimer.delta() < 0){
                    rtime = player.shoot.reload + player.reloadTimer.delta();
                    reload = ((rtime / player.shoot.reload) * 10) << 0;
                }

                for (var i = 0; i < reload; i++) {
                    this.hudWeaponReloadImage.draw(this.topRight.x - 22 - (i*3), this.topRight.y+8);
                };
            }

        }

        if(STATE == 'pause'){
            this.fontWhite.draw('PAUSED', this.top.x, this.top.y, ig.Font.ALIGN.CENTER );
        }

        if(STATE == 'logo_zaklad'){
            this.logoZakladImage.draw(0,0);
        }

        if(STATE == 'logo_p1x'){
            this.logoP1XImage.draw(0,0);
        }

        if(STATE == 'logo_thejam'){
            this.logoTheJamImage.draw(0,0);
        }

        if(STATE == 'logo_pieczarka'){
            this.logoPieczarkaImage.draw(0,0);
        }


        if( ig.ua.mobile && !ig.game.settings.ouya) {
            // MOBILE BUTTONS
            for( var i = 0; i < this.buttons.length; i++ ) {
                this.buttons[i].draw();
            }
        }
    }

});
});