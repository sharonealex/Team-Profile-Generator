
const Employee = require('./Employee');
class Engineer extends Employee{
    constructor(name, role, emailId, employeeId, github){
        super(name, emailId, employeeId);
        this.role = role;
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;