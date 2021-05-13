
/**
 * Function to render different html memeber cards based on the type of employee profile.
 * @param {*} membersData 
 * @returns 
 */
function renderMemberCards(membersData) {
    const htmlCardArr = membersData.map(function (data) {
        let memberRole = data.getRole();
        if (memberRole === 'Manager') {
            return renderManagerCard(data)
        }
        else if (memberRole === 'Engineer') {
            return renderEngineerCard(data)
        }
        else {
            return renderInternCard(data);
        }
    })
    return htmlCardArr.join("\n");
}

function renderManagerCard(memberData) {
    return ` <div class="col-4">
    <div class="card mx-auto mb-3" style="width: 18rem">
        <img class="card-img-top"
            src="https://icons.iconarchive.com/icons/aha-soft/free-large-boss/512/Manager-icon.png"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${memberData.getEmployeeId()}</li>
            <li class="list-group-item">Contact: ${memberData.getEmailId()}</li>
            <li class="list-group-item">OfficeNumber: ${memberData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
</div>`
}

function renderEngineerCard(memberData) {
    return `<div class="col-4">
<div class="card mx-auto mb-3" style="width: 18rem">
    <img class="card-img-top"
        src="https://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Client-Female-Dark-icon.png"
        alt="Card image cap">
    <div class="card-body">
        <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${memberData.getEmployeeId()}</li>
        <li class="list-group-item">Contact: ${memberData.getEmailId()}</li>
        <li class="list-group-item">OfficeNumber: ${memberData.getGithub()}</li>
        </ul>
    </div>
</div>
</div>`
}

function renderInternCard(memberData) {
    return `<div class="col-4">
<div class="card mx-auto mb-3" style="width: 18rem">
    <img class="card-img-top"
        src="https://icons.iconarchive.com/icons/icons-land/vista-people/256/Age-Child-Male-Light-icon.png"
        alt="Card image cap">
    <div class="card-body">
        <h5 class="card-header">${memberData.getName()}<br /><br />${memberData.getRole()}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${memberData.getEmployeeId()}</li>
            <li class="list-group-item">Contact: ${memberData.getEmailId()}</li>
            <li class="list-group-item">School: ${memberData.getSchool()}</li>
        </ul>
    </div>
</div>
</div>`
}

//export as object
// module.exports =  {
//     renderMemberCards : renderMemberCards
// }

//export as function
module.exports = renderMemberCards



