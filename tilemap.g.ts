// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Template":
            case "level1":return tiles.createTilemap(hex`100010000a0a0a0a0a0a0a0a0a0a0300000101000a0a0a0a0a0a0a0a0a0a0300000101000a0a0a0a0a0a0a0a0a0a030000090a070a0a0a0a0a0a0a0a0a0a0300000202000a0a0a0a0a0a0a0a0a0a0300000202000a0a0a0a0a0a0a0a0a0a0300000202000a0a0a0a0a0a0a0a0a0a0300000202000a0a0a0a0a0a0a0a0a0a0300000202000303030303030303030303000002020000000000000504000000000000020200000000000008060000000000000202000000000000000000000000000002020000000000000000000000000000020200000000000000000000000000000202000000000000000000000000000002020000000000000000000000000000020200`, img`
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,tiles.util.object15,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile4,myTiles.tile8,myTiles.tile12,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "RailUP0":
            case "tile1":return tile1;
            case "RailDOWN":
            case "tile2":return tile2;
            case "RailLEFT0":
            case "tile3":return tile3;
            case "RailRIGHT":
            case "tile4":return tile4;
            case "RailDOWNTOLEFT0":
            case "tile5":return tile5;
            case "RailDOWNTORIGHT0":
            case "tile6":return tile6;
            case "RailUPTOLEFT":
            case "tile7":return tile7;
            case "RailUPTORIGHT":
            case "tile8":return tile8;
            case "RailUpToT0":
            case "tile9":return tile9;
            case "RailDownToT0":
            case "tile10":return tile10;
            case "RailLeftToT0":
            case "tile11":return tile11;
            case "RailRightToT0":
            case "tile12":return tile12;
            case "RailPlus":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
