ig.module('game.entities.strongMan')
    .requires(
        'game.entities.player'
    )
    .defines(function () {
        ig.EntityStrongMan = ig.global.EntityStrongMan = EntityPlayer.extend({
            animSheet: new ig.AnimationSheet("media/gfx/players/strong_man.png", 32, 32),
            animInit: "idleX",
            animSettings: {
                idleX: { sequence: [0, 1, 2, 3], frameTime: 0.2 },
                move: { sequence: [4, 5, 6, 7], frameTime: 0.2 },
                jump: { sequence: [8], framerate: 1},
                shotX: { sequence: [9], framerate: 1}
            },
            // params
            jumpForce: 7,
            maxVelGrounded: {x: 90, y: 90},
            health: 120,
            size: {x: 10, y: 30},
            offset: {x: 11, y: 2},
            weaponPosition: {
                flipX: -16, flipY: 7, X: -7, Y: 7
            }
        });
    });