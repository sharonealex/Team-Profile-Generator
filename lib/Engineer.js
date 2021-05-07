class Engineer{
    constructor(name, role, emailId, employeeId, github){
        super(name, emailId, employeeId);
        this.role = role;
        this.github = github;
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;