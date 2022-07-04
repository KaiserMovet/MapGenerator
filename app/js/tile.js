"use strict";
class Tile {
    constructor(cell, tile_type) {
        this.cell = cell;
        this.tile_type = tile_type;
    }
    update_type(tile_name) {
        this.tile_type = tile_name;
    }
    update_content() {
        let image = document.createElement("img");
        image.setAttribute("src", `tiles/${this.tile_type.file_name}`);
        image.setAttribute("style", `transform:rotate(-${this.tile_type.rotation * 90}deg)`);
        if (this.cell.childNodes[0]) {
            this.cell.replaceChild(image, this.cell.childNodes[0]);
        }
        else {
            this.cell.appendChild(image);
        }
    }
}
