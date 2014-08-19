ig.module( 'game.entities.rat' )
.requires(
    'game.entities.enemy'
)
.defines(function () {
    ig.EntityRat = ig.global.EntityRat = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/jump_rat.png", 32, 32),
        size: {x:18,y:8},
        offset: {x:10,y:24},
        animInit: "idleX",
        maxVelGrounded: {x:60,y:50},
        health: 10,
        animSettings: {
            idleX: { sequence: [0,1,2,3,4,5,6,7], frameTime: 0.05 }
        }
    });
});