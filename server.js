const inquirer = require('inquirer');
const fsPromises = require('fs').promises;
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const baseHtmlTemplate = require('./src/baseHtmlTemplate');
const populateHTML = require('./src/populateHTML')




const teamMembers = [];
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

const internQuestions = [
    {
        type: "input",
        name: "roleData",
        message: "Please provide intern's school"
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



function writeHtmlToFile() {
    console.log("writing...")
    const fileName = "./output/team.html";
    const html = baseHtmlTemplate.renderBaseHtml(teamMembers);
    return fsPromises.writeFile(fileName, html)
}


function memberConstructor({ name, role, emailID, employeeId }) {
        let teamMember;
        if (role === 'Manager') {
            console.log("hi");
            return getManagerInputs(managerQuestions)
                .then(({ roleData, moreMembers }) => {
                    teamMember = new Manager(name, role, emailID, employeeId, roleData);
                    console.log(teamMember);
                    return Promise.resolve(teamMember);
                })
        }
        else if (role === 'Engineer') {
            return getEngineerInputs(engineerQuestions)
                .then(({ roleData, moreMembers }) => {
                    teamMember = new Engineer(name, role, emailID, employeeId, roleData);
                    return teamMember;
                })
        }
        else {
            return getInternInputs(internQuestions)
                .then(({ roleData }) => {
                    teamMember = new Intern(name, role, emailID, employeeId, roleData);
                    return teamMember;
                })
        }
    }

function init() {
    getTeamMemberInputs(generalQuestions)
        .then((data)=>{
            return memberConstructor(data)
        })
        .then((memberObj)=>{
            console.log(memberObj);
            teamMembers.push(memberObj)
            console.log("array" + teamMembers)
            writeHtmlToFile(teamMembers)
            .then((resolved)=>{
                console.log("written to file")
            })
            
        })
        // writeHtmlToFile(teamMembers)
        // .then(()=>{
        //     console.log("writing html")
        // })
        // .then(({ teamMember, moreMembers }) => {
        //     teamMembers.push(teamMember);
        // })
        .catch((err) => {
            console.log(err)
        })
}

init();
