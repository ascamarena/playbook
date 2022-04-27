const User = require('../app/user_3_4')

test('Add getters', ()=>{
    const user = new User(1,"carlogilmar","Carlo","Bio");

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
})

test('Add setters', ()=>{
    const user = new User(1,"carlogilmar","Carlo","Bio");
    user.setUsername = "Gilmar"
    user.setBio = "New Bio"

    expect(user.username).toBe("Gilmar");
    expect(user.bio).toBe("New Bio");

})