const UserView = require('../../app/views/UserViews')

/*
Valida que al enviar en el `payload` un valor `null`,
obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
*/
describe("Test for UserView", ()=>{
    test('Return an error object when try to create a new user with an null payload',()=>{
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })

    /*Valida que un `payload` contenga en alguna de las llaves `username`, `name`,
    o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error`
    y que indique el texto: `necesitan tener un valor válido`.*/
    test('Return an error object when try to create a new user with a payload with missing propperties',()=>{
        const payload = {username: "username"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})
