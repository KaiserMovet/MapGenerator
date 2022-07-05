"use strict";
function main() {
    var table = new Grid("main_table", 5, 5);
    // var row = table.insertRow(0);
    table.updateContent();
    table.updateTileType();
    console.log(table.tiles);
    table.generateImg();
    window.setInterval(function () {
        table.generateImg();
    }, 2000);
    // table.generateImg();
}
main();
