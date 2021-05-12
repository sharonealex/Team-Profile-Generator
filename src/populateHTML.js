function renderMemberCards(membersData){
    const htmlCardArr = membersData.map(function(data){
        let memberRole = data.getRole();
        if(memberRole === 'Manager'){
            return renderManagerCard(data)
        }
        else if(memberRole === 'Engineer'){
            return renderEngineerCard(data)
        }
        else{
            return renderInternCard(data);
        }
    })
    return htmlCardArr.join("\n");
}

function renderManagerCard (memberData){
    return `<div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memberData.getOfficeNumber()}</li>
    </ul>
    </div>
    </div>`
}

function renderEngineerCard (memberData){
    return `<div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memberData.getGithub()}</li>
    </ul>
    </div>`

}

function renderInternCard (memberData){
    return `<div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memberData.getSchool()}</li>
    </ul>
    </div>`
}

//export as object
// module.exports =  {
//     renderMemberCards : renderMemberCards
// }

//export as function
module.exports = renderMemberCards



