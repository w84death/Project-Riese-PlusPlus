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

        init: function () {
            this.parent();
            this.initGamePad();
            this.loadLevel(ig.global.LevelSandbox);

            ig.system.clear( '#b2dcef' );

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
                [ 'faceButton2', 'action' ],
                [ 'faceButton3', 'action4' ]
          ];
        },

        update: function() {
          Gamepad.handleInput();
          this.parent();
        }
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