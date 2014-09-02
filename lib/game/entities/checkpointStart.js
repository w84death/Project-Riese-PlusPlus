ig.module(
    'game.entities.checkpointStart'
)
.requires(
    'plusplus.entities.checkpoint',
    'game.entities.strongMan'
)
.defines(function() {
    "use strict";

    ig.EntityCheckpointStart = ig.global.EntityCheckpointStart = ig.EntityCheckpoint.extend({

        restorativeSpawn: true,
        spawnAtSide: { x: 0, y: 1 },

        spawningEntity: ig.EntityStrongMan,

        initProperties: function() {
            this.spawningEntity = ig.EntityStrongMan;

            this.parent();

            if (!ig.global.wm) {
                this.trigger();
            }
        }
    });
});