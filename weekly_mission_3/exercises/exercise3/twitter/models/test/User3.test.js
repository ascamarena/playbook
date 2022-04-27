const User = require('../app/user_3')

test('Add getters', ()=>{
    const user = new User(1,"carlogilmar","Carlo","Bio");

    expect(user.getUsername).toBe("carlogilmar");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
})
