//variáveis bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 14;
let raio = diametro / 2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variáveis do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;

//Placar do Jogo  
let meusPontos = 0;
let pontosOponente = 0;

//Sons
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function preload () {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  mostraBolinha();
  
  moveBolinha();
  
  verificaColisaoBolinha();
  
  mostraRaquete (xRaquete, yRaquete); 
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
    
  movimentaRaquete ();
  movimentaRaqueteOponente ();
   
  
  verificaColisaoRaquete (xRaquete, yRaquete);
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  
  incluiPlacar();
  
  marcaPonto();
}

function mostraBolinha () {
  circle (xBolinha, yBolinha, diametro); 
}

function moveBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBolinha () {
  if (xBolinha + raio > width || xBolinha - raio < 0 ) {
    velocidadeXBolinha *= -1;
  } 
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete)
  
}

function movimentaRaquete () {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente () {
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

function incluiPlacar () {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto () {
  if (xBolinha + raio > 599) {
    meusPontos = meusPontos + 1;
    ponto.play();
  }
  if (xBolinha + raio < 15) {
    pontosOponente = pontosOponente + 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
