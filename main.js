function tocaSomPom () {
    document.querySelector(idElementAudio     ).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


while(contador < listaDeTeclas.length) {
     const tecla = listaDeTeclas[contador]
     const instrumento = tecla.classList[1]
     console.log(instrumento);
     tecla.onclick = function(){
        teclaSom('#som_tecla_pom');
        const idAudio =  `#som_${instrumento}`
    tecla.onclick = function(){
        tocaSom('#som_tecla_pom');
        
    } 
    }  
     
   

    contador = contador + 1;

    console.log(contador);
}
