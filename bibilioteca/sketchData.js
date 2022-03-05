let flores;

function preload() {
  flores = loadJSON("data.json");
}

function setup() {
  createCanvas(400, 400);
  // flores = {
  //   nombre: "margarita",
  //   color: color(220, 200, 0),
  // };
}

function draw() {
  background(0);
  fill(flores.r, flores.g, flores.b);
  text(flores.nombre, width / 2, height / 2);
}
