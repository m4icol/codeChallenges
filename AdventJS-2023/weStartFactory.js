/*

- Fácil

En el taller de Santa, los elfos tienen una lista de regalos 
que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. 
Tu tarea es escribir una función que, 
dada una lista de regalos y los materiales disponibles, 
devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

*/

function manufacture(gifts, materials) {

    // Creamos una lista de materiales, separando cada letra de los materiales
    const materialList = materials.split('');
  
    // Filtramos los regalos
    return gifts.filter(gift => {
    
        // Convertimos el regalo en una lista de letras
        const giftMaterials = gift.split('');

        // Verificamos si todos los materiales del regalo están en la lista de materiales
        return giftMaterials.every(materialGift =>
            materialList.includes(materialGift)
        );
    });
}
