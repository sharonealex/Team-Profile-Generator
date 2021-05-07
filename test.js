
  
const inquirer = require("inquirer");
// const fs = require("fs");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
   
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let Info = "";
        if (role === "Engineer") {
            Info = "GitHub username";
        } else if (role === "Intern") {
            Info = "school name";
        } else {
            Info = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${Info}`,
            name: "Info"
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
        .then(function({Info, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                console.log(role)
               // newMember = new Engineer(name, id, email, Info);
            } else if (role === "Intern") {
               // newMember = new Intern(name, id, email, Info);
            } else {
               // newMember = new Manager(name, id, email, Info);
            }
         
            

        });
    });
}

// function renderHtml(memberArray) {
//     startHtml();
//     for (const member of memberArray) {
//         addHtml(member);
//     }
//     finishHtml();
// }






// addMember();
// startHtml();
// addHtml("hi")
// .then(function() {
// finishHtml();
// });
initApp();
