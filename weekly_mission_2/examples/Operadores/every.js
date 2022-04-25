// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

// Ejemplo 10.1
const numbers = [32,34,56,"t","sdfd"]
const areAllNum = numbers.every((num)=>typeof num === 'number') 
console.log(`¿Todos los elementos son números?: ${areAllNum}`)