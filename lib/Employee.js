class Employee {
    constructor(name, role, emailId, employeeId){
        this.name = name;
        this.role = role;
        this.emailId = emailId;
        this.employeeId = employeeId;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return this.role;
    }

    getEmailId(){
        return  this.emailId;
    }

    getEmployeeId(){
        return this.employeeId
    }
}