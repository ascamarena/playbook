const User = require('../../../twitter/app/models/user')

describe('Unit test for User class', ()=>{
    test('Create an User object', ()=>{
        const user = new User(1,"carlogilmar","Carlo", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
/*      expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated"); Estas líneas corresponden al Requerimiento 1; ejercicio 3*/

        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })
})

test('Add getters', ()=>{
    const user = new User(1,"carlogilmar","Carlo","Bio")

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
})

test('Add setters', ()=>{
    const user = new User(1,"carlogilmar","Carlo","Bio")
    user.setUsername = "Gilmar"
    user.setBio = "New Bio"

    expect(user.username).toBe("Gilmar");
    expect(user.bio).toBe("New Bio");
})