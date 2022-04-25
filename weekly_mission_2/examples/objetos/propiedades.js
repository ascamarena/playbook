// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Carlo",
  age: 27
}

// Ejemplo 2.1: Otro objeto con propiedades
const myRoom = {
  color: "Blue",
  illumination: false,
}

// Ejemplo 2.2: Llamar al color de myRoom
console.log(myRoom.color)

// Ejemplo 2.3: function
function myCat (nombre, edad, color, vivo){
  this.nombre = nombre;
  this.edad = edad;
  this.color = color;
  this.vivo = vivo;
};

var individuo_1 = new myCat("Juan", 8, "Black", true);
var individuo_2 = new myCat("Kat",2,"White",true);

console.log('Ficha Gato 1: ' + individuo_1)
console.log('Ficha Gato 2: ' + individuo_2)
