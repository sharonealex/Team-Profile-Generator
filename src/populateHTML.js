function renderMemberCards(membersData){
    console.log("here" + membersData)
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

function renderManagerCard (memeberData){
    return `<div class="col-6">
    <div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header">${memeberData.getName()}<br /><br />${memeberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memeberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memeberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memeberData.getOfficeNumber()}</li>
    </ul>
    </div>
    </div>`
}

function renderEngineerCard (memberData){
    return `<div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${memeberData.getName()}<br /><br />${memeberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memeberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memeberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memeberData.getGithub()}</li>
    </ul>
    </div>`

}

function renderInternCard (memberData){
    return `<div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${memeberData.getName()}<br /><br />${memeberData.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memeberData.getEmployeeId()}</li>
        <li class="list-group-item">Email Address: ${memeberData.getEmailId()}</li>
        <li class="list-group-item">Office Phone: ${memeberData.getSchool()}</li>
    </ul>
    </div>`
}

module.exports = {
    renderMemberCards
}



