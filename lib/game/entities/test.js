
ig.module( 'game.entities.test' )
    .requires(
        'game.entities.soldierCommando'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntitySoldierCommando.extend({

        });

    });