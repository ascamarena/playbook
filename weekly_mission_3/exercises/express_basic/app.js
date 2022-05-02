/*Objeto de express*/
const express = require('express');

/*App de express*/
const app = express();

/*Puerto en que veremos nuestra app: localhost:3000*/
const port = 3000;

/*Path inicial, responederá a la url: localhost:3000*/
app.get('/', (req, res) =>{ //req = request | res = response
    res.send('Hello World!')
})

/*Inicializar app*/
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

/*Agregando localhost:3000/lauchx*/
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a Launch X!')
})

/*Regresando objeto
localhost:3000/explorersInNode*/
app.get('/explorersInNode', (req, res)=>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})