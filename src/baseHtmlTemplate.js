const renderMemberCards = require("./populateHTML");

/**
 * Function to render Base html which is to be populated with the data passed in from main function.
 * @param {} data 
 * @returns 
 */
const renderBaseHtml = (data) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
</head>

<body style="background-image: url(https://miro.medium.com/max/2000/0*QQ5EvzlrlWThG_8W); background-repeat: no-repeat;background-size: cover;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navbar brand -->
                <a class="navbar-brand mt-2 mt-lg-0" href="#">
                    <img src="https://thestartupgen.com/wp-content/uploads/2019/10/team.jpg" height="100" alt=""
                        loading="lazy" style="border-radius: 45%;" />
                </a>
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Team Profile</a>
                    </li>
                </ul>
                <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->

            <!-- Right elements -->
            <div class="d-flex align-items-center">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                <!-- Avatar -->
                <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufFCnPIU4OYbGLG-psL3Upo0yu135LhmzNA&usqp=CAU"
                        class="rounded-circle" height="50" alt="" loading="lazy" />
                </a>

            </div>
            <!-- Right elements -->

        </div>
        <!-- Container wrapper -->
    </nav>
    <div class="container-fluid">
        <div class="row">${renderMemberCards(data)}
        </div>
    </div>
</body>
</html>`;

module.exports = {
  renderBaseHtml: renderBaseHtml,
};
