ig.module(
        'game.entities.player'
    )
    .requires(
        'plusplus.abstractities.player'
    )
    .defines(function(){

        ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({

            update: function(){
                this.parent();
                console.log(this.health);
            }

        });
    });
