# Team-Profile-Generator
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 
This application uses inquirer npm package, fs package and jest framework for unit testing.

The below video link is a demonstration of how this application works on the server.

## Demo Video

Here is a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

"https://drive.google.com/file/d/1xcAYvGPw9oeKFOwhh4PqmOYEBPiIUP98/view" 

![Alt text](./assets/image.PNG?raw=true "Title")



## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Installation Steps
  1. install Node.js
  2. git clone the project into local machine.
  3. run `npm install` at the level of package.json and check if the all the modules in package.json are installed.
  4. Go into root folder and run `node .\index.js`
  5. To run unit tests `npm test`


## Usage

The application will be invoked by using the following command:

```bash
node `node .\index.js`
```
The command will prompt to enter the team manager’s name, employee ID, email address, and office number.
And from then on it can ask for building team by adding team data for interns and engineers.

If all data was provided correctly, then a message is displayed that writing to file was successful.
On opening the team.html file within the dist folder


Directory structure followed looks as  below

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application  include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory)  ALL pass.