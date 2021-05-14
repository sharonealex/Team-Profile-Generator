const inquirer = require('inquirer');
const fsPromises = require('fs').promises;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const baseHtmlTemplate = require('./src/baseHtmlTemplate');
const populateHTML = require('./src/populateHTML')

const teamMembers = []; //array initialised to story the list of team members.

const managerQuestions = [  //questions that are prompted for manager.
    {
        type: "input",
        name: "name",
        message: "Please provide team manager's name",
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please provide managers's employee ID"
    },
    {
        type: "input",
        name: "emailID",
        message: "Please provide managers's email address"
    },
    {
        type: "input",
        message: `Enter managers office number`,
        name: "officeNumber"
    }
]

const selectRoleQuestions = [
    {
        type: "list",
        name: "role",
        choices: [
            "Engineer",
            "Intern",
            "Finish Build"
        ],
        message: "If you'd like to add more select ROLE choice or select FINISH BUILD"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is engineer\'s name?',
        default: 'Mark Joe',

    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What\'s engineer\'s id?',
        default: '02'
    },
    {
        type: 'input',
        name: 'emailID',
        message: 'What is your email address?',
        default: 'markJoe@123.com',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        default: 'samjoe',
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is interns\'s name?',
        default: 'Mark Joe',

    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What\'s interns\'s id?',
        default: '02'
    },
    {
        type: 'input',
        name: 'emailID',
        message: 'What is your email address?',
        default: 'Bill Thomase@123.com'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter your school name',
        default: 'grammar'
    },
]

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(({ name, emailID, employeeId, github}) => {
            const engineer = new Engineer(name, "Engineer", emailID, employeeId, github)
            teamMembers.push(engineer);
            buildTeam();
        })
}

function createIntern() {
    inquirer.prompt(internQuestions)
        .then(({ name, emailID, employeeId, school}) => {
            const intern = new Intern(name, "Intern", emailID, employeeId, school)
            teamMembers.push(intern)
            buildTeam();

        })
}

function createManager({ name, emailID, employeeId, officeNumber }) {
    const manager = new Manager(name, "Manager", emailID, employeeId, officeNumber)
    teamMembers.push(manager)
    buildTeam();
}


function memberConstructor(role) {
    switch (role) {
        case 'Engineer': {
            createEngineer();
            break;
        }
        case 'Intern': {
            createIntern();
            break;
        }
        default: {
            init();
        }
    }
}

function buildTeam() {
    inquirer.prompt(selectRoleQuestions)
        .then(({ role }) => {
            if (role === "Finish Build") {
                populateHtmlAndWriteToFile(teamMembers);
            } else {
                memberConstructor(role);
            }

        })
}

function populateHtmlAndWriteToFile(teamMembers) {
    const fileName = "./dist/team.html";
    const html = baseHtmlTemplate.renderBaseHtml(teamMembers);
    console.log("******************TEAM PROFILE HTML GENERATED FOR DISPLAY******************")
    return fsPromises.writeFile(fileName, html)
}


function init() {
    console.log("****************************************************************************")
    console.log("*******************Application Start: Team Profile Generator****************")
    console.log("****************************************************************************")
    inquirer.prompt(managerQuestions)
        .then(createManager)
}

init();