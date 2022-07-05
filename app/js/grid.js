"use strict";
class Grid {
    constructor(table_id, x = 10, y = 10) {
        this.table = document.getElementById(table_id);
        this.x = x;
        this.y = y;
        this.tiles = [];
        this.tiles_collection = new TilesCollection();
        this.create();
    }
    create() {
        for (var i = 0; i < this.x; i++) {
            let newRow = this.table.insertRow(-1);
            this.tiles[i] = [];
            for (var j = 0; j < this.y; j++) {
                let newCell = newRow.insertCell(-1);
                this.tiles[i][j] = new Tile(newCell, new TileName(), i, j);
            }
        }
    }
    getNeighbours(x, y) {
        let name = "";
        // Up
        if (x == 0) {
            name += "_";
        }
        else {
            name += this.tiles[x - 1][y].tile_type.rotate_name[2];
        }
        // Right
        name += "_";
        // Down
        name += "_";
        // Left
        if (y == 0) {
            name += "_";
        }
        else {
            name += this.tiles[x][y - 1].tile_type.rotate_name[1];
        }
        return name;
    }
    updateTileType() {
        for (var i = 0; i < this.x; i++) {
            for (var j = 0; j < this.y; j++) {
                let name = this.getNeighbours(i, j);
                let tile = this.tiles_collection.get_type(name);
                this.tiles[i][j].update_type(tile);
                this.tiles[i][j].update_content();
            }
        }
        // for (let row of this.tiles) {
        //   for (let cell of row) {
        //     cell.update_type(new TileName("0000"));
        //     cell.update_content();
        //   }
        // }
    }
    updateContent() {
        for (let row of this.tiles) {
            for (let cell of row) {
                cell.update_content();
            }
        }
    }
    drawImage(ctx, img, x, y, angle = 0, scale = 1) {
        ctx.save();
        ctx.translate(x + (img.width * scale) / 2, y + (img.height * scale) / 2);
        ctx.rotate(angle);
        ctx.translate(-x - (img.width * scale) / 2, -y - (img.height * scale) / 2);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        ctx.restore();
    }
    generateImg() {
        console.log("Updare");
        // table = <HTMLTableElement>document.getElementById(table_id);
        let c = document.getElementById("canvas");
        let size_x = 51;
        let size_y = 51;
        let ctx = c.getContext("2d");
        for (var i = 0; i < this.x; i++) {
            for (var j = 0; j < this.y; j++) {
                let img = this.table.rows[i].cells[j].children[0];
                console.log(img);
                let rotation = parseInt(img.getAttribute("rotation"));
                this.drawImage(ctx, img, j * size_x, i * size_y, rotation * -0.5 * Math.PI);
                // ctx.drawImage(img, j * size_x, i * size_y);
            }
        }
    }
}
