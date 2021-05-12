const Employee = require('./Employee');
class Intern extends Employee{

    constructor(name, role, emailId, employeeId, school){
        super(name, emailId, employeeId)
        this.role = role;
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;