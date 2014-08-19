ig.module( 'game.entities.playerStrongMan' )
.requires(
    'game.entities.entityPlayer'
)
.defines(function () {
    PlayerStrongMan = EntityPlayer.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/players/strong_man.png", 32, 32),
        animInit: "idleX",
        animSettings: {
            idleX: { sequence: [0,1,2,3], frameTime: 0.2 }
        }
    });
});