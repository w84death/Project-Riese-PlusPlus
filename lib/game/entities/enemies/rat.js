ig.module( 'game.entities.enemies.rat' )
.requires(
    'game.entities.enemy',
    'game.entities.player'
)
.defines(function () {
    ig.EntityRat = ig.global.EntityRat = ig.EntityEnemy.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/npc/jump_rat.png", 32, 32)
    });
});