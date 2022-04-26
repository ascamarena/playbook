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

class Desarrollador extends Persona{
    
}

Desarrollador.mensaje();