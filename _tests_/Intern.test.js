const Intern = require('../lib/Intern');


describe("Intern", ()=>{

    it ("should set school account via constructor", () => {
        const testValue = "school";
        const intern = new Intern('name', 'role', 'emailID', 'employeeId', testValue);
        expect(intern.school).toBe(testValue);
      })

      it ("should get school via constructor", () => {
        const testValue = "school";
        const intern = new Intern('name', 'role', 'emailID', 'employeeId', testValue);
        expect(intern.getSchool()).toBe(testValue);
      })

      it("should return \"Intern\" when getRole() is called", () => {
        const testValue = "Intern";
        const intern = new Intern('name', 'role', 'emailID', 'employeeId', testValue);
        expect(intern.getRole()).toBe(testValue);
      }); 
})

