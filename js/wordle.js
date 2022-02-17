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
* Muestra la siguiente fila de letras y bloquea la actual
**************************************************************/
function mostrarSiguientesCasillas() {
    //Deshabilita los input anteriores y el botón pulsado
    $('#word' + intentos).children().prop('disabled', true);
    intentos++;
    //Muestra la siguiente fila de letras
    $('#word' + intentos).css('display', 'block');
    //Cambia el foco al primer input de la nueva palabra actual
    $('#word' + intentos).children().eq(0).focus();
}

function haGanado() {
    inputs = $('#word' + intentos).children();
    //Aquí alamacenamos la palabra de los inputs     
    var palabra = [];

    // Obtenemos la palabra escrita por el usuario
    for (i = 0; i < 5; i++) {
        palabra += inputs.eq(i).val();
    }
    //Verificamos si ha acertado. En tal caso informa al usuario y termina la función
    if (palabra == palabraBuscada){
        let mensajeGanador = '<h2 class="alert alert-success text-center" role="alert">Enhorabuena, has ganado';
        mensajeGanador += '<br><button class="btn-success btn-sm" onclick="window.location.reload();">Volver a jugar</button></h2>';
        $('#mensaje').append(mensajeGanador);
        return true;
    } 
    else return false;
}
/*************************************************************
* Comprueba cada letra y la colorea en verde si está en la posición correcta
* y en amarillo si se encuentra en otra posición.
* Devuelve true si todas son correctas
**************************************************************/
function colorearLetras() {
    inputs = $('#word' + intentos).children();
    //Aquí alamacenamos la palabra de los inputs     
    var palabra = [];

    // Obtenemos la palabra escrita por el usuario
    for (i = 0; i < 5; i++) {
        palabra += inputs.eq(i).val();
    }

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
                else {   //Esta pero en otra posición
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
function palabraAleatoria() {
    var rand = Math.floor(Math.random() * listaPalabras.length);
    palabraBuscada = listaPalabras[rand];
    console.log(palabraBuscada);
}

function haPerdido(){
    //Deshabilita el último input y el botón pulsado
    $('#word' + intentos).children().prop('disabled', true);
    // Muestra un mensaje y un botón para volver a jugar
    let mensajePerdedor = '<h2 class="alert alert-warning text-center" role="alert">Lo siento, no tienes más intentos';
    mensajePerdedor += '<br><button class="btn-success btn-sm" onclick="window.location.reload();">Volver a jugar</button></h2>';
    $('#mensaje').append(mensajePerdedor);
              
}