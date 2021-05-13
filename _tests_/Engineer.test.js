const Engineer = require('../lib/Engineer')

describe("Engineer", ()=>{
    it ("should set GitHUb account via constructor", () => {
        const testValue = "GitHubUser";
        const engineer = new Engineer('name', 'role', 'emailID', 'employeeId', testValue);
        expect(engineer.github).toBe(testValue);
      })

      it ("should get GitHUb account via constructor", () => {
        const testValue = "GitHubUser";
        const engineer = new Engineer('name', 'role', 'emailID', 'employeeId', testValue);
        expect(engineer.getGithub()).toBe(testValue);
      })

      it("should return \"Engineer\" when getRole() is called", () => {
        const testValue = "Engineer";
        const e = new Engineer('name', 'role', 'emailID', 'employeeId', testValue);
        expect(e.getRole()).toBe(testValue);
      }); 
})