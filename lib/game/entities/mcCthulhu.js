ig.module('game.entities.mcCthulhu')
    .requires(
        'game.entities.player'
    )
    .defines(function () {
        EntityMcCthulhu = EntityPlayer.extend({
            animSheet: new ig.AnimationSheet("media/gfx/players/cthulhu.png", 32, 32),
            animInit: "idleX",
            animSettings: {
                idleX: { sequence: [8, 9, 10, 11, 12, 13, 14, 15], frameTime: 0.2 },
                move: { sequence: [0, 1, 2, 3, 4, 5, 6, 7], frameTime: 0.2 },
                jump: { sequence: [16], framerate: 1},
                shot: { sequence: [9, 1 ], framerate: 1}
            },
            // params
            jumpForce: 8,
            maxVelGrounded: {x: 100, y: 100},
            health: 100,
            size: {x: 10, y: 30},
            offset: {x: 11, y: 2}
        });
    });