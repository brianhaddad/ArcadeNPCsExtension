namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
namespace NPCs {
    /**
     * Creates an NPC sprite
     */
    //% blockId=spriteCreateNPC block="create sprite with image $image=variables_get at x $X y $Y"
    //% group="Create"
    //% weight=10
    //% blockGap=8
    export function createNPC (image: Image, X: number, Y: number) {
        let sprite = sprites.create(image, SpriteKind.NPC)
        sprite.z = -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(X, Y))
    }
}
