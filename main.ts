let list: Sprite[] = []
function show_text (mesaage: string) {
    mySprite = sprites.create(image.create(160, 20), SpriteKind.Player)
    images.printText(mySprite.image, mesaage, 0)
    mySprite.ay = -20
    mySprite.y = 130
    mySprite.lifespan = 6000
    pause(1000)
}
let sprite_list: Sprite[] = []
let mySprite: Sprite = null
let text_list = [
"Érase una vez...",
"la historia de los plurales en español",
"en un mundo donde nadie se equivocandia",
"los errores acechan a los hablantes nativos",
"estás preparado para enfrentar a los malhablantes",
"Ya veremos!"
]
effects.starField.startScreenEffect()
for (let value of text_list) {
    show_text(value)
}
game.onUpdate(function () {
    sprite_list = sprites.allOfKind(SpriteKind.Player)
    for (let value of list) {
        if (value.y >= 60) {
            value.ay = 500
        }
    }
})
