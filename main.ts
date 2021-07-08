namespace NPCs {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=spriteKindNPC block="NPC"
    //% group="Kind"
    //% weight=10
    //% blockGap=8
    export const NPC = SpriteKind.create()

    /**
     * Creates an NPC sprite
     */
    //% blockId=spriteCreateNPC block="create sprite with image $image at x $X y $Y"
    //% group="Create"
    //% weight=10
    //% blockGap=8
    export function createNPC (image: Image, X: number, Y: number) : Sprite {
        let sprite = sprites.create(image, NPCs.NPC)
        sprite.z = -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(X, Y))
        return sprite
    }
}
