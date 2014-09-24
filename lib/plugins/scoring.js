ig.module( 'plugins.scoring' )
    .requires(
    )
    .defines(function () {
        'use strict';

        ig.Scoring = ig.global.Scoring = ig.Class.extend({
            score: 0,
            scoringTimeInterval : 1,
            scoringTimeIntervalValue: 3,
            scoringMultiplierInterval: 0.4,
            multipliers: [1, 2, 5],
            // multiplier key
            multiplier: 0,
            init: function() {
                this.timer = new ig.Timer( this.scoringtimeInterval );
                this.timerFromLastKill = new ig.Timer();

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

                if (this.timerFromLastKill.delta() < this.scoringMultiplierInterval) {
                    if (this.multiplier < this.multipliers.length - 1) {
                        this.multiplier += 1;
                    }
                }

                this.timerFromLastKill.reset();

                if (entity.scorePoints) {
                    this.score += entity.scorePoints * this.multipliers[this.multiplier];
                }
            },
            checkMultiplier: function() {
                // auto multiplier reset
                if (this.timerFromLastKill.delta() >= this.scoringMultiplierInterval) {
                    this.multiplier = 0;;
                }

                return this.multipliers[this.multiplier];
            }
        });

    });
