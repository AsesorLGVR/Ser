let list: Sprite[] = []
function show_text (mesaage: string) {
    mySprite = sprites.create(image.create(160, 20), SpriteKind.Player)
    images.printText(mySprite.image, mesaage, 0)
    mySprite.ay = -20
    mySprite.y = 130
    mySprite.lifespan = 6000
    pause(1000)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, huesudo, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 1000)
    info.changeScoreBy(1)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 1000)
    sprite.say("Joder", 1000)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
let pescaito: Sprite = null
let rabioso: Sprite = null
let sprite_list: Sprite[] = []
let projectile: Sprite = null
let mySprite: Sprite = null
let huesudo: Sprite = null
let text_list = [
"Érase una vez...",
"los plurales en español",
"en un mundo ",
"donde nadie se equivoca ",
"los errores acechan ",
"a los hablantes nativos ",
"¿estás prparado  ",
"para enfrentar ",
"a los malhablantes?",
"Ya veremos!"
]
effects.starField.startScreenEffect()
for (let value of text_list) {
    show_text(value)
}
huesudo = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ....7.fd11111111df......
    ...7..fd11111111df......
    ...7..fd11111111df......
    ...7..fddd1111dddff.....
    ...77.fbdbfddfbdbfcf....
    ...777fcdcf11fcdcfbf....
    ....77fffbdb1bdffcf.....
    ....fcb1bcffffff........
    ....f1c1c1ffffff........
    ....fdfdfdfffff.........
    .....f.f.f..............
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(huesudo, 200, 200)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdate(function () {
    sprite_list = sprites.allOfKind(SpriteKind.Player)
    for (let value of list) {
        if (value.y >= 60) {
            value.ay = 500
        }
    }
})
game.onUpdateInterval(5000, function () {
    rabioso = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    rabioso.setVelocity(-100, 50)
    rabioso.setPosition(180, randint(0, 120))
})
game.onUpdateInterval(1000, function () {
    pescaito = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.Enemy)
    pescaito.setVelocity(-100, 0)
    pescaito.setPosition(180, randint(0, 120))
    pescaito.say(":)")
})
