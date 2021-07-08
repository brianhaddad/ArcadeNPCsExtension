namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
namespace Sprites {
    export function CreateNPC (myImage: Image, X: number, Y: number) {
        let sprite = sprites.create(myImage, SpriteKind.NPC)
        sprite.z = -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(X, Y))
        return sprite
    }
}
