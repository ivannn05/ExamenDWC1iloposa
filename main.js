/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */


// EJERCICIO 2.1 Importar las funciones correspondientes



// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
import { listaPrestamos, imgPrestamos, listaSocios, imgSocios } from './funciones.js';
function listadoPrestamos() {
    let listado= document.querySelector("#texto");
   
    listado.innerHTML = " ";
    listado.appendChild(listaPrestamos()) ;
    let img= document.querySelector("#cambio").src=imgPrestamos();
   
    

}

function listadoSocios() {
    let listado= document.querySelector("#texto");
    listado.innerHTML = " ";
    listado.appendChild(listaSocios());
    let img= document.querySelector("#cambio").src = imgSocios();
    
   

}

// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window
window.listaPrestamos = listadoPrestamos;
window.listadoSocios = listadoSocios;

