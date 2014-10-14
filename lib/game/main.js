ig.module(
     'game.main'
)
// then require the other modules
.requires(
    'plusplus.debug.debug',

    // PLUGINS
    'plusplus.core.plusplus',
    'plugins.director',

    'plugins.gui',
    'plugins.menu',
    'plugins.gameflow',
    'plugins.scoring',

    // LEVELS
    'game.levels.sandbox',
    'game.levels.menu',
    'game.levels.e1m1',
    'game.levels.e1m2',
    'game.levels.e1boss',
    'game.levels.e2m1',
    'game.levels.e2m2',
    'game.levels.e2boss',
    'game.levels.e3m1',
    'game.levels.e3boss',

    // entities
    'game.entities.enemy',
    'game.entities.rat',

    // terrain entites
    'game.entities.bigstone',
    'game.entities.box',

    'impact.sound',
    'plugins.position'
)
// now define how your game starts up
.defines(function () {

     // always use strict
     "use strict";
     // store the config in a local variable
     // this is a good pattern to follow in general
     var _c = ig.CONFIG;
     // now have your game extend ig.GameExtended
     var myGameClass = ig.GameExtended.extend({

     	shapesPasses: [
		    // for climbing
		    // we ignore solids and one ways
		    // to only retrieve climbable areas
		    {
		        ignoreSolids: true,
		        ignoreOneWays: true
		    },
		    // for lighting and shadows
		    // we ignore climbables and the edge boundary
		    {
		        ignoreClimbable: true,
		        // throw away the inner loop of the edge of the map
		        discardBoundaryInner: true,
		        // throw away the outer loop of the edge of the map
		        retainBoundaryOuter: false
		    }
		],
        // VERSION
        // ------------------------------------------------------------------------


            version:    'alpha',


        // ------------------------------------------------------------------------

        // SETTINGS
        sound:    false,
        soundBackgroundVolume: 0.5,
        //gravity:  800,
        enableShake: true,
        timer:    new ig.Timer(),

        // PLAYERS
        players: [
          {
            entitie: null,
            start:  false,
            hero:   0,
            score:  0
          },
          {
            entitie: null,
            start:  false,
            hero:   1,
            score:  0
          }
        ],
        debug: true,
        // SETTINGS
        settings: {
          ouya: true,
          shake: true,
          particlesLife: 60,
          deadBodyLife: 60,
          particlesOnScreen: 512,
          boxParticles: 4,
          playerBlood: 5,
          npcBlood: 10,
        },

        score: 0,
        scoreTimer: new ig.Timer(),
        lives: 3,
        camera_direction:0.1,
        // list of background music
        backgroundMusic: [
           new ig.Sound('media/sounds/intro.*'),
           new ig.Sound('media/sounds/forest.*'),
           new ig.Sound('media/sounds/aliens.*'),
           new ig.Sound('media/sounds/base.*'),
        ],
         // maps level to music
        levelMusic: [0,1,2,3],
        lastLevel: 0,
        init: function () {
            this.parent();


            this.director = new ig.Director(this,
              [LevelMenu, LevelSandbox, LevelE1m1, LevelE1m2]
            );
            this.flow = new ig.GameFlow();
            this.gui = new ig.GUI();
            this.menu = new ig.Menu();
            this.scoring = new ig.Scoring();
            this.position = new ig.Position();

            // play default song
            this.backgroundMusic[this.lastLevel].volume = this.soundBackgroundVolume;
            this.backgroundMusic[this.lastLevel].play();
            this.backgroundMusic[this.lastLevel].loop = true;
        },
        update: function() {
          this.parent();
          this.menu.update();
          this.score = this.scoring.getScore();

          var multiplier = this.scoring.checkMultiplier();
          if (multiplier > 1) {
              this.multiplierMsg = ' COMBO! X'+ multiplier;
          } else {
              this.multiplierMsg = '';
          }

          if(this.flow.STATE == 'intro'){

            if(ig.game.screen.x > 500 || ig.game.screen.x < 0){
              this.camera_direction *= -1;
            }
            ig.game.screen.x += this.camera_direction;

          }
;
          this.handleSoundtrack();
        },
        handleSoundtrack: function() {

            // zmiana dzwieku
            if (this.director.currentLevel != this.lastLevel) {
                // stop last
                this.backgroundMusic[this.lastLevel].stop();
                this.lastLevel = this.director.currentLevel;

                var levelMusic = this.levelMusic[this.director.currentLevel];
                this.backgroundMusic[levelMusic].volume = this.soundBackgroundVolume;
                this.backgroundMusic[levelMusic].play();
                this.backgroundMusic[levelMusic].loop = true;
            }
        },

        draw: function() {
          this.parent();
          this.gui.draw();
        }
     });

     ig.main(
          "#canvas",
          myGameClass,
          60,
          _c.GAME_WIDTH,
          _c.GAME_HEIGHT,
          _c.SCALE,
          ig.LoaderExtended
      );
});