//criando a função tocaSomAplausos e buscando a id da tecla para tocar.
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//referencia constante listaDeTeclas que busca todas as classes tecla
const listaDeTeclas = document.querySelectorAll(".tecla");

//criar a variavel de contagem
let contador = 0;
//laço de repetição While
while(contador < listaDeTeclas.length){
//chamada para tocar o som pelo índice do elemento da lista
listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
    console.log(contador);
}