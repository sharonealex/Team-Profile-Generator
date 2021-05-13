const Manager = require('../lib/Manager');


describe("Manager", ()=>{
    it ('should set office number via constructor ', ()=>{
        const testValue = "school";
        const manager = new Manager('name', 'role', 'emailID', 'employeeId', testValue);
        expect(manager.officeNumber).toBe(testValue);
    })
    it ("should get officeNumber via constructor", () => {
        const testValue = "school";
        const manager = new Manager('name', 'role', 'emailID', 'employeeId', testValue);
        expect(manager.getOfficeNumber()).toBe(testValue);
      })

      it("should return \"Manager\" when getRole() is called", () => {
        const testValue = "Manager";
        const manager = new Manager('name', 'role', 'emailID', 'employeeId', testValue);
        expect(manager.getRole()).toBe(testValue);
      }); 
})

