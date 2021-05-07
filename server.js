const inquirer = require('inquirer');

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
        name: "EmployeeId",
        message: "Please provide team memeber's employee ID"
    }
]

const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please provide us with Manager's office number",
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "githubUsername",
        message: "Please provide engineers github username"
    }
]


const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Please provide intern's school"
    }
]

//function to get all team memeber details using inquirer package.


//import the html template for each role

//populate the html template with values from the previous

//initialise app.

function init(){

}


init();
