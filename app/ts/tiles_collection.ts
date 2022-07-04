class TileName {
  name: string;
  rotation: number;
  file_name: string;
  rotate_name: string;
  constructor(name: string = "", rotation: number = 0) {
    this.name = name;
    this.rotation = rotation;
    if (this.name == "") {
      this.file_name = "None.bmp";
      this.rotate_name = "";
    } else {
      this.file_name = `${this.name}.bmp`;
      this.rotate_name = name.slice(rotation) + name.slice(0, rotation);
    }
  }

  check_if_match(check_name: string) {
    for (let i = 0; i < 4; i++) {
      if (check_name[i] != "_" && check_name[i] != this.rotate_name[i]) {
        return false;
      }
    }
    return true;
  }
}

class TilesCollection {
  available: TileName[];
  none_tile: TileName;
  constructor() {
    // Assign none tile
    this.none_tile = new TileName("");
    // Create all possible tiles
    this.available = [];
    let existing = ["0000", "0101", "0110", "0111", "1111"];
    for (let name of existing) {
      this.available.push(new TileName(name, 0));
      this.available.push(new TileName(name, 1));
      this.available.push(new TileName(name, 2));
      this.available.push(new TileName(name, 3));
    }
  }

  get_type(needed: string = "0000") {
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
