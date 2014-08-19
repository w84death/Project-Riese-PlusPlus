ig.module(
        'game.entities.entityPlayer'
    )
    .requires(
        'plusplus.abstractities.player'
    )
    .defines(function(){

        EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

        });
    });
