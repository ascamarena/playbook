class Persona {
    constructor(names,age,gender){
        this.names = names;
        this.age = age;
        this.gender = gender;
    }
    saludo(){
        console.log(`Hola!\nSoy ${this.names}\nTengo ${this.age} años\nSoy ${this.gender}`)
    }
}

let persona_1 = new Persona("Alexis",24,"hombre")
let persona_2 = new Persona("Juan",16,"hombre")
let persona_3 = new Persona("Jaqueline",23,"mujer")

persona_1.saludo();
persona_2.saludo();
persona_3.saludo();