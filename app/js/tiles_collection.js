"use strict";
class TileName {
    constructor(name = "", rotation = 0) {
        this.name = name;
        this.rotation = rotation;
        if (this.name == "") {
            this.file_name = "None.bmp";
            this.rotate_name = "";
        }
        else {
            this.file_name = `${this.name}.bmp`;
            this.rotate_name = name.slice(rotation) + name.slice(0, rotation);
        }
    }
    check_if_match(check_name) {
        for (let i = 0; i < 4; i++) {
            if (check_name[i] != "_" && check_name[i] != this.rotate_name[i]) {
                return false;
            }
        }
        return true;
    }
}
class TilesCollection {
    constructor() {
        // Assign none tile
        this.none_tile = new TileName("");
        // Create all possible tiles
        this.available = [];
        let existing = [
            "0000",
            "0101",
            "0110",
            "0111",
            "0121",
            "0202",
            "0220",
            "0222",
            "1111",
            "2121",
            "2222",
            "0303",
            "0313",
            "0330",
            "1313",
            "2323",
        ];
        for (let name of existing) {
            this.available.push(new TileName(name, 0));
            this.available.push(new TileName(name, 1));
            this.available.push(new TileName(name, 2));
            this.available.push(new TileName(name, 3));
        }
    }
    get_type(needed = "0000") {
        let possible = [];
        for (let tile of this.available) {
            if (tile.check_if_match(needed)) {
                possible.push(tile);
            }
        }
        if (possible.length > 0) {
            return possible[Math.floor(Math.random() * possible.length)];
        }
        console.log(`There is no available tile for ${needed}`);
        return this.none_tile;
    }
}
