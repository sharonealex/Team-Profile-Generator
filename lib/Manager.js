const Employee = require('./Employee');
class Manager extends Employee {

    constructor(name, role, emailId, employeeId, officeNumber){
        super(name, emailId, employeeId)
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;