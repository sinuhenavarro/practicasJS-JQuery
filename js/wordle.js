/*******************************************************
 * ESTE FICHERO CONTIENE LAS FUNCIONES Y LAS VARIABLES
 * ***************************************************** 
 */

var listaPalabras = ['ajito','ayuda','adobo','adora','aplilo', 'añejo'];         
//Palabra que se debe descifrar para ganar
var palabraBuscada = 'ayuda';
//Última palabra añadida. Se usa para recorrer la lista de palabras
var n = 0;

var listaPalabras = [];


//Oculta las casillas 1-5
function ocultarCasillas() {  
    for(let i=1;i<6;i++){
        $('#word' + i).css('display','none');
    }  
}

//Muestra la siguiente fila de letras y bloquea la actual
function mostrarSiguientesCasillas(boton){
    //Deshabilita los input anteriores y el botón pulsado
    $('#word' + n).children().prop('disabled', true);
    n++;
    //Muestra la siguiente fila de letras
    $('#word' + n).css('display','block'); 
}


/* Colorea letras en verde si están en la posicion correcta y
* en azul si se encuentra en la palabra pero en otra posición
*/
 function letrasCorrectasJS(){
    var inputs = document.getElementById('word'+n).children;
    //document.getElementById('word0').children[0].value;
    var palabra = []; 
    
    var posicionesCorrectas = [];
    for(let i=0;i<5;i++){
        palabra[i] = inputs[i].value;
        //Buscamos si cada letra de la palabra actual está en la palabraçbuscada
        var encontrada = palabraBuscada.indexOf(inputs[i].value);
        if(encontrada != -1){
            //Recorre las posiciones en las que se encuentra la letra y cambia el color a verde o azul
            for(let j=0;j<5;j++){
                if(encontrada == i){
                    //La letra está en la posición correcta
                    inputs[i].style.backgroundColor = 'green';
                }
            }
        }
    }
    //Insertamos la nueva palabra en la lista de palabras
    //listaPalabras.push(palabra);
 }

 function letrasCorrectasJQuery() { 
     inputs = $('#word'+n).children();
    //Aquí alamacenamos la palabra de los inputs     
    var palabra = [];

    var posicionesCorrectas = [];
    for(i=0; i<5; i++){
        console.log(`i= ${i}`);
        palabra[i] = inputs.eq(i).val();
        console.log('Palabra[i]: ' + palabra[i])
        // Recorre las posiciones y  pone en color las que se encuentra
        for(j=0; j<5; j++){
            console.log('j= ' + j);
            console.log('PalabraBuscada[j]: ' + palabraBuscada[j]);
            if(palabra[i] == palabraBuscada[j]){
                if(i==j){
                    //La letra está en la posición correcta
                    inputs.eq(i).css('background-color','#198754');
                    console.log('Misma posición');
                    break; //Sale del bucle
                }
                else{
                    //Está en otra posición
                    inputs.eq(i).css('background-color','#ffc107');
                    console.log('Posición Distinta');
                }
            }
        }
    }

}
