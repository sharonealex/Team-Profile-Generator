const inquirer = require('inquirer');
const fsPromises = require('fs').promises;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const baseHtmlTemplate = require('./src/baseHtmlTemplate');
const populateHTML = require('./src/populateHTML')

const teamMembers = []; //array initialised to story the list of team members.

const generalQuestions = [  //questions that are general to all types of team members.
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




/**
 * Function to input all the team memeber profile using inquirer package prompts.
 * @param {*} generalQuestions 
 * @returns 
 */
function getTeamMemberInputs(generalQuestions) {
    console.log("==================================================================================")
    console.log("===============ENTER TEAM MEMBER PROFILE DATA BASED ON THE PROMPTS================")
    console.log("==================================================================================")
    return inquirer.prompt(generalQuestions)
}

function getRoleBasedInputs(roleQues) {
    return inquirer.prompt([{
        type: "input",
        message: `Enter team member's ${roleQues}`,
        name: "roleQues"
    },
    {
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
            "yes",
            "no"
        ],
        name: "moreMembers"
    }])
}

/**
 * Function that populates the base html template and writes it to a file for display.
 * @param {} teamMembers 
 * @returns 
 */
function populateHtmlAndWriteToFile(teamMembers) {
    const fileName = "./output/team.html";
    const html = baseHtmlTemplate.renderBaseHtml(teamMembers);
    console.log("=============WRITING TEAM PROFILE CONTENTS INTO HTML============")
    return fsPromises.writeFile(fileName, html)
}

/**
 * Function to initialise the app and build team profiles.
 */
function init() {
    getTeamMemberInputs(generalQuestions)
        .then(({ name, role, emailID, employeeId }) => {
            let roleQuestion;
            switch (role) {
                case 'Manager':
                    roleQuestion = 'officeNumber'
                    break;
                case 'Engineer':
                    roleQuestion = 'github'
                    break;
                case 'Intern':
                    roleQuestion = 'school'
            };
            getRoleBasedInputs(roleQuestion)
                .then(({ roleQues, moreMembers }) => {
                    let teamMember;
                    switch (role) {
                        case 'Manager':
                            teamMember = new Manager(name, role, emailID, employeeId, roleQues);
                            break;
                        case 'Engineer':
                            teamMember = new Engineer(name, role, emailID, employeeId, roleQues);
                            break;
                        case 'Intern':
                            teamMember = new Intern(name, role, emailID, employeeId, roleQues);
                    };
                    teamMembers.push(teamMember);
                    if (moreMembers === 'yes') {
                        return init()
                    }
                    populateHtmlAndWriteToFile(teamMembers)
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err)
        })
}

init();
