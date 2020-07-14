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
let text_list = ["Érase una vez...", "la historia de una princesa", "encantada originaria de princesalandia", "perdida en un bosque encantado", "secuestrada por un rapero sifilítico", "Fin"]
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
