
namespace SpriteKind {
    export const enemy = SpriteKind.create()
        export const Laser = SpriteKind.create()
        }

        // NEON GALAXY SPACE WARS

        scene.setBackgroundColor(15)

        // Starry background
        let bg = image.create(160, 120)
        for (let i = 0; i < 180; i++) {
            let x = randint(0, 159)
                let y = randint(0, 119)
                    bg.setPixel(x, y, randint(1, 14))
                    }
                    scene.setBackgroundImage(bg)

                    // Player spaceship
                    let player = sprites.create(img`
                        . . . . 8 . . . . . . 8 . . . .
                            . . . . 8 8 . . . 8 8 . . . . .
                                . . . . 8 9 8 . 8 9 8 . . . . .
                                    . . . 8 8 9 8 8 8 9 8 8 . . . .
                                        . . 8 8 8 9 9 9 9 9 8 8 8 . . .
                                            . 8 8 8 8 8 9 9 9 8 8 8 8 8 . .
                                                . . . 8 8 8 9 9 8 8 8 . . . . .
                                                    . . . . 8 8 9 8 8 . . . . . . .
                                                        . . . . 8 8 9 8 8 . . . . . . .
                                                            . . . 8 8 8 9 9 8 8 8 . . . . .
                                                                . . 8 8 8 8 9 9 9 9 8 8 8 . . .
                                                                    . . . . 8 8 8 8 8 8 . . . . . .
                                                                        . . . . . 4 . . . 4 . . . . . .
                                                                            . . . . 4 4 . . 4 4 . . . . . .
                                                                            `, SpriteKind.Player)

                                                                            player.setPosition(80, 100)
                                                                            player.setStayInScreen(true)
                                                                            controller.moveSprite(player, 110, 110)

                                                                            // Player shooting
                                                                            controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
                                                                                let laser = sprites.createProjectileFromSprite(
                                                                                        img`
                                                                                                    . 2 .
                                                                                                                2 4 2
                                                                                                                            . 2 .
                                                                                                                                    `,
                                                                                                                                            player,
                                                                                                                                                    0,
                                                                                                                                                            -170
                                                                                                                                                                )
                                                                                                                                                                    laser.setKind(SpriteKind.Laser)
                                                                                                                                                                        laser.setFlag(SpriteFlag.AutoDestroy, true)
                                                                                                                                                                        })

                                                                                                                                                                        // Enemy spawning
                                                                                                                                                                        function spawnEnemy() {
                                                                                                                                                                            let enemy = sprites.create(img`
                                                                                                                                                                                    . . 2 2 . . . . 2 2 . . .
                                                                                                                                                                                            . 2 2 4 2 . . 2 4 2 2 . .
                                                                                                                                                                                                    2 2 2 2 4 2 2 4 2 2 2 2 .
                                                                                                                                                                                                            . 2 2 2 2 4 4 2 2 2 2 . .
                                                                                                                                                                                                                    . . 2 2 2 2 2 2 2 2 . . .
                                                                                                                                                                                                                            . . . 2 2 . . 2 2 . . . .
                                                                                                                                                                                                                                `, SpriteKind.Enemy)

                                                                                                                                                                                                                                    enemy.setPosition(randint(10, 150), 0)
                                                                                                                                                                                                                                        enemy.setVelocity(randint(-25, 25), randint(35, 65))
                                                                                                                                                                                                                                            enemy.setFlag(SpriteFlag.AutoDestroy, true)
                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                            // Enemy collision with player
                                                                                                                                                                                                                                            sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy,
                                                                                                                                                                                                                                            function (sprite, otherSprite) {
                                                                                                                                                                                                                                                otherSprite.destroy(effects.fire, 100)
                                                                                                                                                                                                                                                    info.changeLifeBy(-1)
                                                                                                                                                                                                                                                        scene.cameraShake(4, 300)
                                                                                                                                                                                                                                                        })

                                                                                                                                                                                                                                                        // Laser hits enemy
                                                                                                                                                                                                                                                        sprites.onOverlap(SpriteKind.Laser, SpriteKind.Enemy,
                                                                                                                                                                                                                                                        function (laser, enemy) {
                                                                                                                                                                                                                                                            laser.destroy()
                                                                                                                                                                                                                                                                enemy.destroy(effects.disintegrate, 200)
                                                                                                                                                                                                                                                                    info.changeScoreBy(10)
                                                                                                                                                                                                                                                                        scene.cameraShake(2, 100)
                                                                                                                                                                                                                                                                        })

                                                                                                                                                                                                                                                                        // Spawn enemies
                                                                                                                                                                                                                                                                        game.onUpdateInterval(850, function () {
                                                                                                                                                                                                                                                                            spawnEnemy()
                                                                                                                                                                                                                                                                            })

                                                                                                                                                                                                                                                                            // Difficulty increases
                                                                                                                                                                                                                                                                            game.onUpdateInterval(10000, function () {
                                                                                                                                                                                                                                                                                game.splash("WARNING! MORE ENEMIES!")
                                                                                                                                                                                                                                                                                })

                                                                                                                                                                                                                                                                                // Game settings
                                                                                                                                                                                                                                                                                info.setScore(0)
                                                                                                                                                                                                                                                                                info.setLife(5)

                                                                                                                                                                                                                                                                                // Game over
                                                                                                                                                                                                                                                                                info.onLifeZero(function () {
                                                                                                                                                                                                                                                                                    game.over(false, effects.melt)
                                                                                                                                                                                                                                                                                    })

                                                                                                                                                                                                                                                                                    // Start
                                                                                                                                                                                                                                                                                    game.splash("NEON GALAXY", "PRESS A TO SHOOT")


