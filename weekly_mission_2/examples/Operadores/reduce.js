// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

/*Ejemplo 9.1: Recordar parámetros de reduce (acc{acumulador}, element{elemento actual},
index{indice elemento actual}, arr{arreglo iterado})
*/
const numbers = [64,2,2,4,2]
const res = numbers.reduce((acc, element) => acc / element)
console.log(res)