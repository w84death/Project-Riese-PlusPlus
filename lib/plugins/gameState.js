ig.module( 'plugins.gameState' )
    .requires(

    )
    .defines(function () {
        'use strict';

        ig.GameState = ig.global.GameState = ig.Class.extend({

            selectedHero: null

        });

    });
