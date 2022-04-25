// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")

/*En este ejemplo el MC me puso a pensar. 
Me costaba trabajo entender por qué podíamos llamar
al mensaje.
Tras un rato de análisis pude ver la respuesta. Buen ejemplo MC Carlo! 
*/

// Ejemplo 5.1: 
const myData = {
    age: 24,
    sayhello: function(myName){
        console.log(`Hola! Me llamo ${myName} y tengo ${this.age} años `)
    }
}
console.log(myData.sayhello("Alexis"))
// Ejemplo 5.2:
const myUCLPrediction = {
    text: "Esta es mi predicción",
    prediccion: function(local, goles_local, visita, goles_visita){
        console.log(`${this.text}: ${local} ${goles_local} - ${goles_visita} ${visita}`)
    }
}
console.log(myUCLPrediction.prediccion("Liverpool",2,"Villarreal",0))
// Ejemplo 5.3:
const myColor = {
    nivelRGB: function(R,G,B){
        R = R + 10;
        G = G - R;
        B = G * 0
        console.log(`Tu nuevo color es (${R},${G},${B})`)
    }
}
console.log(myColor.nivelRGB(50,105,69))