const renderMemberCards = require('./populateHTML');

const renderBaseHtml = (data) =>  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">TEAM PROFILE</span>
    </nav>
    <div class="container">
        <div class="row">
        <ul class="ul"> ${renderMemberCards(data)}</ul>
        </div>
</div>
</body>
</html>`
       

module.exports ={
    renderBaseHtml: renderBaseHtml
} 
