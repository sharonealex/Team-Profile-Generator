const Employee = require('../lib/Employee');

describe("Employee", ()=>{
    it ("should instantiate employee instance", ()=>{
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })
})