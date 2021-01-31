//Libraries for different employees
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Includes for questions and file gen
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const util = require('util');
//Creates files and directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Renders HTML Files
const render = require("./lib/htmlRenderer");
const { Console } = require("console");

const EmployeeRoster = []; 
 
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

//Confirms User is a Manager
const managerQuestions = () => {
    return inquirer.prompt([
      {
          type: 'confirm',
          name: 'yesManager',
          message: 'Are you the manager?',
        },
                 
    ]) ;
  };

// Get's Manager Information
  const newManager = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Please provide manager name:',
        },
      {
        type: 'input',
        name: 'id',
        message: 'Please provide manager id:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide manager email:',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide manager office number:',
      },
        // Pushes Manager into the Employee Roster & Moves to New Employee                    
     ]).then(answers => {
         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
         EmployeeRoster.push(manager);
        
         newEmployee();
     })
     
   };
   

// Asks which employee to add
  const newEmployee = () => {
    return inquirer.prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to input?',
        name: 'roleChoice',
        choices: [
            "Intern",
            "Engineer",
            "I am done inputting employees.",
            ],
        },
        // Pushes Manager into the Employee Roster & Moves to New Employee                    
     ]).then(answers => {
        if(answers.roleChoice === "Intern"){
            console.log("--Let's Input this Intern!--");
            newIntern();
        }
        else if (answers.roleChoice === "Engineer"){
            console.log("--Let's Input this Engineer!--");
            newEngineer();
        }
        else if (answers.roleChoice === "I am done inputting employees."){
            console.log("--Alll done! --");
         
           const htmlRender = render(EmployeeRoster);
           fs.writeFileSync(outputPath, htmlRender, "UTF-8");
           
           console.log("-- File Rendered --");
        }
                        
     })
     
   };

    // Add a new Engineer
  const newEngineer= () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Please provide engineer name:',
        },
      {
        type: 'input',
        name: 'id',
        message: 'Please provide engineer id:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide engineer email:',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'Please provide engineer GitHub username:',
      },
                        
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        EmployeeRoster.push(engineer);
        newEmployee();
    })
  };

  // Add a new Intern
  const newIntern = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Please provide intern name:',
        },
      {
        type: 'input',
        name: 'id',
        message: 'Please provide intern id:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide intern email:',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please provide intern school name:',
      },
   // Pushes Intern into the Employee Roster                     
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        EmployeeRoster.push(intern);
        newEmployee();
    })
  };
  
   
  // Initializes The App
  const init = async () => {
    console.log("Let's Get This Read-Me Party Started! Please Answer the Following Questions...");
    try {
      const managerAnswers = await managerQuestions();
      if (managerAnswers.yesManager === true){
        console.log("Let's Get some Information About You First!")
        newManager();
    } else {
        console.log("You must be a manager to input team members. Have a super day!")
    }
   } catch (err) {
    console.log(err);
  }};

  init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.