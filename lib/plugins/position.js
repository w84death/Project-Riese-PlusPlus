ig.module( 'plugins.position' )
    .requires(
    )
    .defines(function () {
        'use strict';

        ig.Position = ig.global.Position = ig.Class.extend({
            getGameX: function() {
                return ig.game.screen.x;
            },
            getGameY: function() {
                return ig.game.screen.y;
            },
            getX: function(entity) {
                return entity.pos.x - ig.game.screen.x;
            },
            getY: function(entity) {
                return entity.pos.y - ig.game.screen.y;
            },
            onScreen: function(entity) {
                var rangeX = entity.pos.x - ig.game.position.getGameX();
                var rangeY = entity.pos.y - ig.game.position.getGameY();
                if (rangeX > 0 && rangeX < ig.system.width && rangeY > 0 && rangeY < ig.system.height) {
                    return true;
                }

                return false;
            }
        });
    });
