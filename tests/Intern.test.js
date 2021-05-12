const Intern = require('../lib/Intern');


describe("Intern", ()=>{
    it ('should set school name via constructor ', ()=>{
        const testValue = "school";
        const intern = new Intern('name', 'role', 'emailID', 'employeeId', testValue);
        expect(intern.getSchool()).toBe(testValue);
    })
})

