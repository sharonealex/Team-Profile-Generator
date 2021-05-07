class Employee {
    
    constructor(name, emailId, employeeId){
        this.name = name;
        this.emailId = emailId;
        this.employeeId = employeeId;
    }

    getName(){
        return this.name;
    }

    getEmailId(){
        return  this.emailId;
    }

    getEmployeeId(){
        return this.employeeId
    }
}