
ig.module( 'game.entities.test' )
    .requires(
        'game.entities.mine'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntityMine.extend({

        });

    });