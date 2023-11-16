//criando a função tocaSomAplausos e buscando a id da tecla para tocar.
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//referencia constante listaDeTeclas que busca todas as classes tecla
const listaDeTeclas = document.querySelectorAll(".tecla");

//criar a variavel de contagem

//laço de repetição While trocado pelo "for" tecla, efeito, idAudio e TocaSom 
for(let contador = 0; contador < listaDeTeclas.length; contador = contador +1){
  const tecla = listaDeTeclas;
const efeito = efeito.ClassList [1];//listaDeTeclas [contador].classList[1];
const idAudio = `#som_${efeito}`;//uso do template string
tecla.onclick = function(){
    tocaSom(idAudio);
}
    tecla.onkeydown = function () {
        tecla.classList.add ('ativa');
    }
tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
}
}
