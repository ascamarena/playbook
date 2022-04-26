const explorers = [
    {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
        "js",
        "c#"
    ],
    missions: {
        onboarding: {
        isFinished: true,
        exercisesFinished: true
        },
        frontend: {
        isFinished: true,
        exercisesFinished: true
        }
    }
    },
    {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
        "js"
    ],
    missions: {
        onboarding: {
        isFinished: false,
        exercisesFinished: false
        },
        frontend: {
        isFinished: false,
        exercisesFinished: false
        }
    }
    },
    {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
        "elixir"
    ],
    missions: {
        onboarding: {
        isFinished: true,
        exercisesFinished: true
        },
        frontend: {
        isFinished: false,
        exercisesFinished: false
        }
    }
    }
]

//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorer)=>console.log(explorer.name))

//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((explorer)=>console.log(explorer.stack))

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
let stacks = explorers.map((explorer)=>explorer.stack)
console.log(stacks)

/*Obtén la lista de explorers que tengan en su stack "js", 
usa FILTER (para validar un elemento en un lista se usa el método includes)*/
let js = explorers.filter((explorer)=>explorer.stack.includes("js"))
console.log(js)

//Busca el primer explorer que sea de la CDMX, usa FIND
let cdmx = explorers.find((explorer)=>explorer.city==='CDMX')
console.log(cdmx)

//Obtén la suma de todos los exercises_completed, usa REDUCE
let sum = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed)
console.log(sum)

/*Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished
en frontend como true, usa SOME*/
let finished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
console.log(finished)

/*Obtén la validación si todos los explorers tienen
la propiedad isFinished del onboarding como true. Usa EVERY.*/
let finish_ob = explorers.every((explorer)=>explorer.missions.onboarding.isFinished===true)
console.log(finish_ob)