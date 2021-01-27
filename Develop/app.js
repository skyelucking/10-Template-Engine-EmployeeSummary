const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

 let Employees = []; 
 
 const promptUser = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'id',
          message: 'Please enter employee ID:',
        },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter employee name:',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Please enter employee email:',
        },  
        {
            type: 'list',
            name: 'role',
            message: 'Which type of employee do you want to add?',
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "Quit"
            ]
          },      
    ]);
  };

 

  //   Bonus using async/await and try/catch
const init = async () => {
    console.log("Let's Get This Read-Me Party Started! Please Answer the Following Questions...");
    try {
      const answers = await promptUser();
  
      const html = generateReadMe(answers);
  
      await writeFileAsync('team.html', html);
  
      console.log('Successfully wrote to Employee File');
    } catch (err) {
      console.log(err);
    }
  };

const generateReadMe = (answers) =>
`
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
            <li class="list-group-item">School: ${answers.school}</li>
        </ul>
    </div>
</div>

 `;




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

const employeeNew = new Employee(100, 'Alice', 'test@test.com');

  
console.log('---Employee---');
employeeNew.printInfo();
employeeNew.getName();
employeeNew.getId();
employeeNew.getEmail();
employeeNew.getRole();
init();

