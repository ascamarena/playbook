// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])

// Ejemplo 3.1:
const myFlower = {
    name: "Sunflower",
    age: 2,
    color: [
        "yellow",
        "brown",
        "green"
    ]    
}
console.log(myFlower.color)
// Ejemplo 3.2:
function myClassmates(name, age, height, nickname){
    this.name = name;
    this.age = age;
    this.height = height;
    this.nickname = nickname;
}

let cm_1 = new myClassmates("Juan",8,150,["Johnny","Lobo","Juanito"])

console.log(cm_1)
// Ejemplo 3.3:

const myData = {
    name: {
        first_name: "Alexis",
        last_name: "Santibáñez"
    },
    age: 24,
    nicknames: [
        "Wero",
        "Zuri",
        "Camarock"
    ]
}

console.log(myData.nicknames)