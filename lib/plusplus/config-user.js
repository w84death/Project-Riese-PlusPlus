ig.module(
    'plusplus.config-user'
)
    .defines(function() {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {
            // make the game fullscreen! 800x450 900x540 1000/600
            GAME_WIDTH_PCT: 0,
            GAME_HEIGHT_PCT: 0,
            SCALE:4,
            SCALE_MAX: 4,
            SCALE_MIN: 4,
            GAME_WIDTH: 900,
            GAME_HEIGHT: 540,
            GAME_WIDTH_VIEW: 900,
            GAME_HEIGHT_VIEW: 540,
            AUTO_CRISP_SCALING: 1,
            CAMERA: {
                KEEP_CENTERED: 0,
                TRANSITION_DURATION: 0,

                BOUNDS_TRAP_AS_PCT: true,
                BOUNDS_TRAP_PCT_MINX: -0.4,
                BOUNDS_TRAP_PCT_MINY: -0.3,
                BOUNDS_TRAP_PCT_MAXX: 0.4,
                BOUNDS_TRAP_PCT_MAXY: 0.4
            },

        };

    });
