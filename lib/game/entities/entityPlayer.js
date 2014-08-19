ig.module(
        'game.entities.entityPlayer'
    )
    .requires(
        'plusplus.abstractities.player'
    )
    .defines(function(){

        ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

        });
    });
