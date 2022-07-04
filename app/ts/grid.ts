class Grid {
  table: HTMLTableElement;
  x: number;
  y: number;
  tiles: Tile[][];
  tiles_collection: TilesCollection;

  constructor(table_id: string, x: number = 10, y: number = 10) {
    this.table = <HTMLTableElement>document.getElementById(table_id);
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
        this.tiles[i][j] = new Tile(newCell, new TileName());
      }
    }
  }

  getNeighbours(x: number, y: number) {
    let name = "";

    // Up
    if (x == 0) {
      name += "_";
    } else {
      name += this.tiles[x - 1][y].tile_type.rotate_name[2];
    }

    // Right
    name += "_";

    // Down
    name += "_";

    // Left
    if (y == 0) {
      name += "_";
    } else {
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
}
