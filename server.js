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



//function to get all team memeber details using inquirer package.
function getTeamMemberInputs(generalQuestions) {
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


function writeHtmlToFile() {
    const fileName = "./output/team.html";
    const html = baseHtmlTemplate.renderBaseHtml(teamMembers);
    return fsPromises.writeFile(fileName, html)
}


function memberConstructor({ name, role, emailID, employeeId }) {
    let teamMember;
    if (role === 'Manager') {
        return getManagerInputs(managerQuestions)
            .then(({ roleData, moreMembers }) => {
                teamMember = new Manager(name, role, emailID, employeeId, roleData);
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
                    console.log(roleQues)
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
                    console.log('teamMembers', teamMembers)
                    if (moreMembers === 'yes') {
                        return init()
                    }
                   
                })
                .catch((err)=>{
                    console.log(err);
                })

            // return memberConstructor(data)
        })
        // .then((res)=>{
        //     console.log(res);
        // })
        // .then((memberObj)=>{
        //     teamMembers.push(memberObj)
        //     writeHtmlToFile(teamMembers)
        //     .then((resolved)=>{
        //     })

        // })
        .catch((err) => {
            console.log(err)
        })
}

init();
