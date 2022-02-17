/*******************************************************
 * ESTE FICHERO CONTIENE LAS FUNCIONES Y LAS VARIABLES
 * ***************************************************** 
 */

var listaPalabras = ['ajito', 'ayuda', 'adobo', 'adora', 'apilo', 'añejo'];
// Palabra que se debe descifrar para ganar
var palabraBuscada;
// Número de intentos realizados. El máximo es 6
var intentos = 0;
//inputs con las letras escritas por el jugador
var inputs;

/*************************************************************
 * Oculta las casillas 1-5
**************************************************************/
function ocultarCasillas() {
    for (let i = 1; i < 6; i++) {
        $('#word' + i).css('display', 'none');
    }
}

/*************************************************************
* Muestra la siguiente fila de letras y bloquea la actual
**************************************************************/
function mostrarSiguientesCasillas(boton) {
    //Deshabilita los input anteriores y el botón pulsado
    $('#word' + intentos).children().prop('disabled', true);
    intentos++;
    //Muestra la siguiente fila de letras
    $('#word' + intentos).css('display', 'block');
}

/*************************************************************
* Comprueba cada letra y la colorea en verde si está en la posición correcta
* y en amarillo si se encuentra en otra posición.
* Devuelve true si todas son correctas
**************************************************************/
function comprobarPalabra() {
    inputs = $('#word' + intentos).children();
    //Aquí alamacenamos la palabra de los inputs     
    var palabra = [];

    // Obtenemos la palabra escrita por el usuario
    for (i = 0; i < 5; i++) {
        palabra += inputs.eq(i).val();
    }
    //Verificamos si ha acertado. En tal caso termina la función
    if(palabra == palabraBuscada) return true;
    
    //Recorre la palabra buscada comparando con cada caracter de la palara escrita
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (palabra[i] == palabraBuscada[j]) {
                if (i == j) {
                    //La letra está en la posición correcta
                    inputs.eq(i).css('background-color', '#198754');
                    //Sale del bucle para que no tenga en cuenta esa letra si se repite más adelante
                    break; //Sale del bucle
                }
                else{   //Esta pero en otra posición
                        inputs.eq(i).css('background-color', '#ffc107');
                        break;
                }
            }
        }
    }
    

}
/*******************************************************************
 * FUNCIÓN QUE ELIGE UNA PALABRA ALEATORIA DE LA LISTA DE PALABRAS
 */
function palabraAleatoria(){
    var rand = Math.floor(Math.random()*listaPalabras.length);
    palabraBuscada = listaPalabras[rand];
    console.log(palabraBuscada);    
}
