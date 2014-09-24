
ig.module( 'game.entities.test' )
    .requires(
        'game.entities.alienOverseer'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntityAlienOverseer.extend({

        });

    });