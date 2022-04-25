// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age) // Cuando encuentra el primer elemento deja de buscar

// Ejemplo 11.1:
const cities = [
    "Durango",
    "Querétaro",
    "Mérida",
    "Los Cabos"
]
const citiesWo = cities.filter((city)=>city.includes("o")) //Imprimir ciuddes que tengan 'o'
console.log(citiesWo)

//Ejemplo 11.2:
let cityWq = citiesWo.filter((city)=>city.startsWith("Q"))
console.log(cityWq)

// Ejemplo 11.3:
let findCity = cities.find((city)=>{
    return city.endsWith("o")
})
console.log(findCity)