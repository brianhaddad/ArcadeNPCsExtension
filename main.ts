namespace SpriteKind {
    //% isKind
    export const NPC = SpriteKind.create()
}
namespace NPCs {
    /**
     * Creates an NPC sprite
     */
    //% blockId=spriteCreateNPC block="create NPC with image $image at x $X y $Y"
    //% group="Create"
    //% weight=10
    //% blockGap=8
    export function createNPC (image: Image, X: number, Y: number) : Sprite {
        let sprite = sprites.create(image, SpriteKind.NPC)
        sprite.z = -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(X, Y))
        return sprite
    }
}
