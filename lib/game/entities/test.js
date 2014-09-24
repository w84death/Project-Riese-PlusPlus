
ig.module( 'game.entities.test' )
    .requires(
        'game.entities.rat'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntityRat.extend({

        });

    });