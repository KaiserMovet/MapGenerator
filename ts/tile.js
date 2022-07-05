"use strict";
class Tile {
    constructor(cell, tile_type, x, y) {
        this.cell = cell;
        this.tile_type = tile_type;
        this.x = x;
        this.y = y;
    }
    update_type(tile_name) {
        this.tile_type = tile_name;
    }
    updateCanvas(image) {
        if (!image.complete) {
            setTimeout(this.updateCanvas, 1000);
        }
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        ctx.drawImage(image, this.y * 51, this.x * 51);
        console.log(1);
    }
    update_content() {
        let image = document.createElement("img");
        let x = this.x;
        let y = this.y;
        image.setAttribute("src", `tiles/${this.tile_type.file_name}`);
        image.setAttribute("style", `transform:rotate(-${this.tile_type.rotation * 90}deg)`);
        image.setAttribute("rotation", `${this.tile_type.rotation}`);
        if (this.cell.childNodes[0]) {
            this.cell.replaceChild(image, this.cell.childNodes[0]);
        }
        else {
            this.cell.appendChild(image);
        }
        // console.log(2);
        // this.updateCanvas(image);
    }
}
