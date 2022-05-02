// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//ENDPOINTS

//routes
/*HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar
para un recurso determinado. Aunque estos también pueden ser sustantivos, 
estos métodos de solicitud a veces son llamados HTTP verbs. 
Cada uno de ellos implementan una semántica diferente, pero algunas características similares
son compartidas por un grupo de ellos*/

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET all request ${new Date()}`)
    const explorer1 = {id: 1, name: "Carlo"}
    const explorer2 = {id: 2, name: "Alexis"}
    const explorer3 = {id: 3, name: "Juan"}
    const explorer4 = {id: 4, name: "Sofía"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    //Code status 200 se pone cuando el proceso es exitoso; y el .json para el formato de regreso
    res.status(200).json(explorers)
})

//Crea un endpoint (GET) que te regrese un explorer mediando un ID 
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Carlo"}
    res.status(200).json(explorer)
})

//Crea un endpoint (POST) que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`API explorers POST request ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    /*
El código de respuesta de estado de éxito creado HTTP 201 Created indica que la solicitud ha tenido éxito
y ha llevado a la creación de un recurso. El nuevo recurso se crea efectivamente antes de enviar esta 
respuesta. y el nuevo recurso se devuelve en el cuerpo del mensaje, su ubicación es la URL de la solicitud
o el contenido del encabezado de la Ubicación.

El caso de uso común de este código de estado es el resultado de una solicitud metodo POST*/
    res.status(201).json({message: "Created"}) 
})

//Crea un endpoint (PUT) que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //Parámetros de un cliente 
    res.status(200).json({message: "Updated!"})
})

//Crea un endpoint (DELETE) para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Parámetros de un cliente
    res.status(200).json({message: "Deleted!"})
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*RECORDATORIO IMPORTANTE:

Para usar curl en powershell necesitamos usar curl.exe <<>> en vez de curl
unicamente*/