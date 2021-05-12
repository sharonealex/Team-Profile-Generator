const Manager = require('../lib/Manager');


describe("Manager", ()=>{
    it ('should set office number via constructor ', ()=>{
        const testValue = "school";
        const manager = new Manager('name', 'role', 'emailID', 'employeeId', testValue);
        expect(manager.getOfficeNumber()).toBe(testValue);
    })
})

