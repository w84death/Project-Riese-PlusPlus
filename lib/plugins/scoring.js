ig.module( 'plugins.scoring' )
    .requires(
    )
    .defines(function () {
        'use strict';

        ig.Scoring = ig.global.Scoring = ig.Class.extend({
            score: 0,
            scoringTimeInterval : 1,
            scoringTimeIntervalValue: 3,
            init: function() {
                this.timer = new ig.Timer( this.scoringtimeInterval );
                // co 1 sek obliczane - not working
                this.timer.maxStep = 1;
            },
            getScore: function() {
                 if (this.timer.delta() > this.scoringTimeInterval) {
                    this.score += this.scoringTimeIntervalValue;
                    this.timer.reset();

                }

                return this.score;
            },
            calculate: function(entity) {
                if (entity.scorePoints) {
                    this.score += entity.scorePoints;
                }
            }
        });

    });
