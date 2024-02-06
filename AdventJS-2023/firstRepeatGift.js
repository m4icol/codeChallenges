/*

- Fácil

En la fábrica de juguetes del Polo Norte, 
cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, 
algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha 
repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, 
debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. 
Si no hay números repetidos, devuelve -1.

*/

// gifts

function findFirstRepeated(gifts) {

    // Almacena los regalos en un array vacío
    const repeatedGifts = []; 
  
    // Iteramos sobre cada regalo
    for (const gift of gifts) {
    
        // Verificamos si el valor del regalo está repetido
        if (repeatedGifts.includes(gift)) {

            return gift; // Devolvemos el primer regalo repetido

        }
        // Si no está repetido, lo agregamos al array
        repeatedGifts.push(gift);
    }

    // Si no hay regalos repetidos, devuelve -1
    return -1;
}
