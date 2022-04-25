// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 81 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)

//En este ejercicio se devolvieron únicamente los valores mayores a 80 

// Es interesante ver que hay dos variables M, ¿Qué pasa si le subimos el score a la primera m por 81
// Se imprimieron las dos 'M'

console.log(scores[2])
console.log(scores[4])

//Curioso