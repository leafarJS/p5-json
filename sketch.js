let x = 0;
let datosEspaciales;
function setup() {
  createCanvas(600, 400);
  //Esta API devuelve el número actual de personas en el espacio. Cuando se conoce, también devuelve los nombres y las naves espaciales en las que se encuentran esas personas. Esta API no acepta entradas.
  //TODO: para acceder de otra manera cuando no responde la API se puede utilizar "JSONP, como tercer argumento  en loadJSON"
  loadJSON("http://api.open-notify.org/astros.json", datosObtenidos);
}
function datosObtenidos(data) {
  datosEspaciales = data;
}
function draw() {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x += 1;
  if (x > width) {
    x = 0;
  }
  console.log(datosEspaciales);

  if (datosEspaciales) {
    randomSeed(4);
    for (let i = 0; i < datosEspaciales.number; i++) {
      fill(255);
      circle(random(width), random(height), 20);
    }
  }
}
