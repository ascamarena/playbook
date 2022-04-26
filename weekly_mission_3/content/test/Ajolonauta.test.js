const Ajolonauta = require('../app/Ajolonauta')

describe("Probando lo visto en el live", () => {
    test('Creación de objeto', () => {
        
        const woopa = new Ajolonauta("Woopa")

        expect(woopa.name).toBe("Woopa");
    });
})