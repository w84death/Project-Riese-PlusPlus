ig.module(
    'game.entities.checkpointStart'
)
.requires(
    'plusplus.entities.checkpoint',
    'plugins.gameState'
)
.defines(function() {
    "use strict";

    ig.EntityCheckpointStart = ig.global.EntityCheckpointStart = ig.EntityCheckpoint.extend({

        restorativeSpawn: true,
        spawnAtSide: { x: 0, y: 1 },

        initProperties: function() {
            this.parent();

            this.spawningEntity = ig.GameState.selectedHero;

            if (!ig.global.wm) {
                this.trigger();
            }
        }
    });
});