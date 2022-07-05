var refreshIntervalId: number;

function main(x: number = 5, y: number = 5) {
  var table: Grid = new Grid("main_table", x, y);
  // var row = table.insertRow(0);
  table.updateContent();
  table.updateTileType();
  console.log(table.tiles);
  table.generateImg();
  refreshIntervalId = window.setInterval(function () {
    table.generateImg();
  }, 2000);
  // table.generateImg();
}

function myFunction() {
  clearInterval(refreshIntervalId);
  let x = parseInt(
    (<HTMLInputElement>document.getElementById("table_size")!).value
  );
  console.log(x);
  main(x, x);
}

main();
