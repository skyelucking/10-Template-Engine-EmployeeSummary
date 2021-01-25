const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'id',
          message: 'Please enter ID:',
        },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter name:',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Please enter email:',
        },  
      {
          type: 'input',
          name: 'school',
          message: 'Please enter employee school:',
        },
             
    ]);
  };

 // TODO: Write code to define and export the Employee class
class Intern extends Employee {
    constructor(id, name, email, role) {
     super(id, name, email, 'Intern');
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }
  
    printInfo(){
    //   console.log(`Intern Name: ${this.name} `);
    //   console.log(`This intern has an id of ${this.id}`);
    //   console.log(`This Employee has a role of ${this.role}`);
    //   console.log(`This Employee has an email address of ${this.email}`);
    //   console.log(`This intern went to school ${this.school}`);
    }

    getName(){
        console.log(`Employee Name: ${this.name} `);
    }
    getId(){
        console.log(`Employee ID: ${this.id} `);
    }
    getEmail(){
        console.log(`Employee Name: ${this.email} `);
    }
    getRole(){
        this.role = 'Intern';
        console.log(`Employee Role: ${this.role} `);
    }
    getSchool(){
        console.log(`Employee School: ${this.school} `);
    }

  }


// Bonus using async/await and try/catch

const generateReadMe = (answers) =>
`
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${init.role}</h3>
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

const init = async () => {
    console.log("Let's Get This Read-Me Party Started! Please Answer the Following Questions...");
    try {
      const role = internNew.getRole();
      const answers = await promptUser();
      const html = generateReadMe(answers);
  
      await writeFileAsync('intern_testing.html', html);
  
      console.log('Successfully wrote to Intern File');
    } catch (err) {
      console.log(err);
    }
  };

const internNew = new Intern(15, 'Skye', 'lucking@gmail.com');

  
console.log('---Intern---\n');
internNew.printInfo();
internNew.getName();
internNew.getId();
internNew.getEmail();
internNew.getRole();
init();
  module.exports = Employee;
