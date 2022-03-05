let data;

function preload() {
  data = loadJSON("birds.json");
}

function setup() {
  noCanvas();
  //let bird = data.birds[1].members[2];

  let _Apajaros = data.birds;
  for (let i = 0; i < _Apajaros.length; i++) {
    createElement("h1", _Apajaros[i].family);
    let _Amiembros = _Apajaros[i].members;
    for (let j = 0; j < _Amiembros.length; j++) {
      createDiv(_Amiembros[j]);
    }
  }
  //createP(bird);
}
