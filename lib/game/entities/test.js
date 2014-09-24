
ig.module( 'game.entities.test' )
    .requires(
        'plusplus.entities.rat'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntityRat.extend({

        });

    });