let lineaX = 0;
let url = "http://api.open-notify.org/iss-now.json";
let datosEspaciales;
let issX = 0;
let issY = 0;
function setup() {
  createCanvas(600, 400);
  setInterval(pedirISS, 100);
}
function pedirISS() {
  loadJSON(url, obtenerDatos);
}
function obtenerDatos(data) {
  datosEspaciales = data;
  let latitud = datosEspaciales.iss_position.latitude;
  let longitud = datosEspaciales.iss_position.longitude;

  issX = map(latitud, -90, 90, 0, width);
  issY = map(longitud, -90, 90, 0, height);
}
function draw() {
  background(51);
  circle(issX, issY, 10);

  stroke(255);
  line(lineaX, 0, lineaX, height);
  lineaX += 5;
  if (lineaX > width) {
    lineaX = 0;
  }
}
