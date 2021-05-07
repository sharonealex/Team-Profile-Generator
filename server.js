const inquirer = require('inquirer');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

const generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please provide team member's name",
    },
    {
        type: "list",
        name: "role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        message: "Please select team memeber's role"
    },
    {
        type: "input",
        name: "emailID",
        message: "Please provide team members's email address"
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please provide team memeber's employee ID"
    }
]

const managerQuestions = [
    {
        type: "input",
        name: "roleData",
        message: "Please provide us with Manager's office number",
    },
    {
        type: "list",
        message: "Would you like to add more members to your team?",
        choices: [
            "yes",
            "no"
        ],
        name: "moreMembers"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "roleData",
        message: "Please provide engineers github username"
    }
]


const internQuestions = [
    {
        type: "input",
        name: "roleData",
        message: "Please provide intern's school"
    }
]

//function to get all team memeber details using inquirer package.
function getTeamMemberInputs(generalQuestions) {
    return inquirer.prompt(generalQuestions)
}

function getManagerInputs(managerQuestions) {
    return inquirer.prompt(managerQuestions);
}

function getEngineerInputs(engineerQuestions) {
    return inquirer.prompt(engineerQuestions);
}

function getInternInputs(internQuestions) {
    return inquirer.prompt(internQuestions);
}

//import the html template for each role

//populate the html template with values from the previous

//initialise app.

function init(){
    getTeamMemberInputs(generalQuestions)
    .then(({ name, role, emailID, employeeId })=>{
        let teamMember;
        if(role === 'Manager'){
            getManagerInputs(managerQuestions)
            .then(({ roleData, moreMembers })=>{
                 teamMember = new manager (name, role, emailID, employeeId, roleData)
                 console.log(teamMember.emailId)
            })
        }
        if(role === 'Engineer'){
            getEngineerInputs(engineerQuestions)
            .then(({ roleData, moreMembers })=>{
                 teamMember = new engineer (name, role, emailID, employeeId, roleData)
                 console.log(teamMember.emailId)
            })
        }
        if(role === 'Intern'){
            getInternInputs(internQuestions)
            .then(({ roleData })=>{
                 teamMember = new intern (name, role, emailID, employeeId, roleData)
                 console.log(teamMember.emailId)
            })
        }
    })
}

init();
