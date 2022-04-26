class Persona {
    constructor(names,age,gender){
        this.names = names;
        this.age = age;
        this.gender = gender;
    }
    saludo(){
        console.log(`Hola!\nSoy ${this.names}\nTengo ${this.age} años\nSoy ${this.gender}`)
    }
    static mensaje(){
        console.log("Solo soy una persona...")
    }
}
let persona = new Persona("Alexis", 24, "hombre");
persona.saludo();
persona.mensaje(); //marca error. En el siguiente ejercicio averiguaremos por qué.