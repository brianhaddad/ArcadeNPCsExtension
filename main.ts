namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
namespace Sprites {
    /**
     * Creates an NPC sprite
     */
    //% blockId=spriteCreateNPC block="create sprite with image: $image=variables_get at x: $X y: $Y"
    //% group="Create"
    //% weight=10
    //% blockGap=8
    export function createNPC (myImage: Image, X: number, Y: number) {
        let sprite = sprites.create(myImage, SpriteKind.NPC)
        sprite.z = -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(X, Y))
    }
}
