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
        name: "TeamMemberId",
        message: "Please provide team memeber ID"
    }
]

//function to get all team memeber details using inquirer package.


//import the html template for each role

//populate the html template with values from the previous

//initialise app.

function init(){

}


init();
