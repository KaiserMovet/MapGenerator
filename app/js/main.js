"use strict";
function main() {
    var table = new Grid("main_table", 25, 25);
    // var row = table.insertRow(0);
    table.updateContent();
    table.updateTileType();
    console.log(table.tiles);
}
main();