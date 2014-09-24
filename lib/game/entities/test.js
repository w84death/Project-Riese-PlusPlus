
ig.module( 'game.entities.test' )
    .requires(
        'game.entities.worker'
    )
    .defines(function () {
        ig.EntityTest = ig.global.EntityTest = ig.EntityWorker.extend({

        });

    });