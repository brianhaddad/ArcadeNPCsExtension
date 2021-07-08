namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
let mySprite2: Sprite = null
function CreateNPC (myImage: Image, X: number, Y: number) {
    mySprite2 = sprites.create(myImage, SpriteKind.NPC)
    mySprite2.z = -1
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(X, Y))
    return mySprite2
}
