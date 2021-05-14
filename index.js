const inquirer = require('inquirer');
const fsPromises = require('fs').promises;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const baseHtmlTemplate = require('./src/baseHtmlTemplate');

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

const selectRoleQuestions = [  //questions that are prompted for building team
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

const engineerQuestions = [   //questions that are prompted for engineers
    {
        type: 'input',
        name: 'name',
        message: 'What is engineer\'s name?',
        default: 'Sally Joe',

    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What\'s engineer\'s id?',
        default: '02987'
    },
    {
        type: 'input',
        name: 'emailID',
        message: 'What is your email address?',
        default: 'sallyJoe@123.com',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        default: 'sallyJoe99',
    }
]

const internQuestions = [ //questions that are prompted for interns
    {
        type: 'input',
        name: 'name',
        message: 'What is interns\'s name?',
        default: 'Mark Thomas',

    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What\'s interns\'s id?',
        default: '0298'
    },
    {
        type: 'input',
        name: 'emailID',
        message: 'What is your email address?',
        default: 'MarkThomas@123.com'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter your school name',
        default: 'Monash'
    },
]

/**
 * Funtion to construct an engineer instance from the prompted answers,
 * and add to list of team members for  building the team.
 */
function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(({ name, emailID, employeeId, github}) => {
            const engineer = new Engineer(name, "Engineer", emailID, employeeId, github)
            teamMembers.push(engineer);
            buildTeam();
        })
}

/**
 * Funtion to construct an intern instance from the prompted answers,
 * and add to list of team members for  building the team.
 */
function createIntern() {
    inquirer.prompt(internQuestions)
        .then(({ name, emailID, employeeId, school}) => {
            const intern = new Intern(name, "Intern", emailID, employeeId, school)
            teamMembers.push(intern)
            buildTeam();

        })
}

/**
 * Funtion to construct an manager instance from the prompted answers,
 * and add to list of team members for  building the team.
 */
function createManager({ name, emailID, employeeId, officeNumber }) {
    const manager = new Manager(name, "Manager", emailID, employeeId, officeNumber)
    teamMembers.push(manager)
    buildTeam();
}

/**
 * Funtion to conditionally invoke team member constructor based on roles
 */
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


/**
 * Funtion that acts as the connector to add more members or finish build.
 */
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


/**
 * Funtion that populates the base html template with relevant role cards and writes to html for display
 */
function populateHtmlAndWriteToFile(teamMembers) {
    const fileName = "./dist/team.html";
    const html = baseHtmlTemplate.renderBaseHtml(teamMembers);
    console.log("******************TEAM PROFILE HTML GENERATED FOR DISPLAY******************")
    return fsPromises.writeFile(fileName, html)
}



/**
 * Initialize the app, to prompt to enter managers profile data.
 */
function init() {
    console.log("****************************************************************************")
    console.log("*******************Application Start: Team Profile Generator****************")
    console.log("****************************************************************************")
    inquirer.prompt(managerQuestions)
        .then(createManager)
}

init();