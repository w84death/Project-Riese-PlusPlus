ig.module( 'game.entities.stone' )
.requires(
    'plusplus.entities.destructable'
)
.defines(function () {

    ig.EntityStone = ig.global.EntityStone = ig.EntityDestructable.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/particle/stone.png", 23, 22),
        size: {x:18,y:16},
        offset: {x:3,y:3},
        collides: 0,
        animInit: "idleX",
        animsExpected: [ "idle" ]
    });
});