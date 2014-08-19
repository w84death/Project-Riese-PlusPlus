ig.module( 'game.entities.strongMan' )
.requires(
    'game.entities.player'
)
.defines(function () {
    EntityStrongMan = EntityPlayer.extend({
        animSheet: new ig.AnimationSheet( "media/gfx/players/strong_man.png", 32, 32),
        animInit: "idleX",
        animSettings: {
            idleX: { sequence: [0,1,2,3], frameTime: 0.2 }
        }
    });
});