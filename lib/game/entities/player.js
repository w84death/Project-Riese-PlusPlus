ig.module( 'game.entities.player' )
.requires(
    'plusplus.abstractities.player'
)
.defines(function () {
    ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/players/strong_man.png", 32, 32),
        animInit: "idleX",
        animSettings: {
            idleX: { sequence: [0,1,2,3], frameTime: 0.2 }
        }
    });
});