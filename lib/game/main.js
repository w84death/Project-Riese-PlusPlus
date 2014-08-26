ig.module(
     'game.main'
)
// then require the other modules
.requires(
    'plusplus.debug.debug',
    'plusplus.core.plusplus',
    'plugins.gamepad',

    // levels
    'game.levels.sandbox',
    'game.levels.menu',

    // entities
    'game.entities.enemy',
    'game.entities.rat'
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
        state: 'menu',

        init: function () {
            this.parent();
            this.initGamePad();
            this.initKeyboard();
            ig.system.clear( '#b2dcef' );

            this.initMenu();

        },

        initKeyboard: function(){
          ig.input.bind(ig.KEY.Z, 'shoot');
          ig.input.bind(ig.KEY.SPACE, 'jump');
          ig.input.bind(ig.KEY.ENTER, 'enter');
        },

        initGamePad: function(){
          // GAMEPAD
          Gamepad.mappings.one = [
                [ 'dpadUp', 'up' ],
                [ 'dpadDown', 'down' ],
                [ 'dpadLeft', 'left' ],
                [ 'dpadRight', 'right' ],
                [ 'leftStickX', 'left', 'right' ],
                [ 'leftStickY', 'up', 'down' ],
                [ 'faceButton0', 'attack' ],
                [ 'faceButton1', 'defence' ],
                [ 'faceButton2', 'jump' ],
                [ 'faceButton3', 'action4' ]
          ];
        },

        initMenu: function(){
          this.loadLevel(ig.global.LevelMenu);
        },

        initGame: function(){
          this.state = 'game';

          // kill menu UI
          // ...

          // init game UI
          var score = ig.game.spawnEntity(ig.UIElement, 0, 0, {
            font: new ig.Font( _c.PATH_TO_MEDIA + 'font_04b03_white_16.png' ),
            text: 'Life : ???',
            posPct: {
                x: 0.2,
                y: 0.2
            },
          });
          this.loadLevel(ig.global.LevelSandbox);
        },

        update: function() {
          Gamepad.handleInput();
          this.parent();


          if(this.state == 'menu'){
            if(ig.input.released('jump') || ig.input.released('enter')){
              this.initGame();
            }
          }

          if(this.state == 'game'){

          }
        },
     });
     // (optionally, add custom settings in 'plusplus/config-user.js')
     // then start the game as usual with your game and config
     ig.main(
         // you'll need a canvas element with an id of 'canvas'
          "#canvas",
          // your game class
          myGameClass,
          // this value does nothing
          60,
          // the width / height / scale of your game
          // don't forget that Impact++ can scale dynamically
          // and can be resolution independent (see config)
          _c.GAME_WIDTH,
          _c.GAME_HEIGHT,
          _c.SCALE,
          // and the Impact++ customizable loader
          // within which you can easily change the logos!
          ig.LoaderExtended
      );
     // and whenever you create a new entity remember...
     // plain entities extend ig.EntityExtended
     var myEntityClass = ig.EntityExtended.extend({
         // entity settings go here
     });
     // and in a similar vein...
     // characters entities extend ig.Character
     // creature entities extend ig.Creature
     // particles entities extend ig.Particle
     // player entities extend ig.Player
     // and so on (we've got lots of abstracts)
});