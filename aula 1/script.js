const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const avancar = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');


const NumeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');

}
function PausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
  botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    PausarFaixa();
    taTocando = 0;
  }



}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = 'Capitulo ' + capituloAtual; 
}

function proximaFaixa() {
  if(capituloAtual === NumeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();    
}

function VoltarFaixa() {
  if(capituloAtual === 1) {
    capituloAtual = NumeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3';
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
avancar.addEventListener('click', proximaFaixa);
anterior.addEventListener('click',  VoltarFaixa);

