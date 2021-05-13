const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("should instantiate employee instance", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
    })

    it("should set name via constructor argument", () => {
        const name = "tom";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("should set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("tom", "test@example.com", testValue);
        expect(e.employeeId).toBe(testValue);
    });

    it("should set email via constructor argument", () => {
        const testValue = "test@example.com";
        const e = new Employee("tom", testValue);
        expect(e.emailId).toBe(testValue);
    });

    it("should get name via getName()", () => {
        const testValue = "tom";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    it("should get id via getEmployeeId()", () => {
        const testValue = 100;
        const e = new Employee("tom", "email", testValue);
        expect(e.getEmployeeId()).toBe(testValue);
    });

    it("should get email via getEmail()", () => {
        const testValue = "test@example.com";
        const e = new Employee("tom", testValue, 7);
        expect(e.getEmailId()).toBe(testValue);
    });

    it("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("tom", 1, "test@example.com");
        expect(e.getRole()).toBe(testValue);
    });
})