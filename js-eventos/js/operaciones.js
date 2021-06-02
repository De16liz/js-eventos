
//window.onload = function()
//{
    //console.log( "HolaS" );
//}

/**
 * Funcion que incrementa un número dado desde teclado 
 * en una caja de texto
 */

function imprimir()
{
    
    //var texto = document.getElementById( "texto" ).Value;
    //var salida = document.getElementById( "salida" );
    
    //console.log( "Mi evento" )
    //salida.innerHTML =  texto * 1 + 1;
    //salida.innerHTML = parseInt( texto ) + 1;

    var texto = document.getElementById("texto").value;
    var num = document.getElementById("num").value;
    var salida = document.getElementById( "salida" );

    salida.innerHTML = parseInt(texto) + parseInt(num);



}