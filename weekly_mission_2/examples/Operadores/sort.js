//Ejemplo 15: Uso de sort para ordenar elementos (En este caso, en orden alfabetico)
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 15.1: 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numbers = [getRandomInt(0,9), getRandomInt(0,9), getRandomInt(0,9), getRandomInt(0,9), getRandomInt(0,9)]
console.log(numbers.sort())