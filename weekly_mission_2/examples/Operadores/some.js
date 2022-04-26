// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

// Ejemplo 14.1: 
let animals = [
    "fox",
    "shark",
    "dog",
    "owl"
]
const areOs = animals.some((withO)=> withO.includes("o"))
console.log(areOs) //Basta con que haya solo un elemento para que arroje el booleano; en este caso es True