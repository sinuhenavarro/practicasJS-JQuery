var listaPalabras = ['ajito','ayuda','adobo','adora','aplilo', 'añejo'];         
//Palabra que se debe descifrar para ganar
var palabra = 'ayuda';
//Última palabra añadida. Se usa para recorrer la lista de palabras
var n = 0;


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